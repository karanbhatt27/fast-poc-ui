import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  userId!: number;
  lastValues: any = {};
  savingMessage = '';
  savingStatusClass = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.userId = this.userService.userId;
    this.form = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      address: [''],
      phone: [''],
    });

    this.loadUserForm();

    this.form.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((values) => this.detectAndSaveChanges(values));
  }

  loadUserForm() {
    this.http
      .get<any>(`http://localhost:8000/api/load-form/${this.userId}`)
      .subscribe({
        next: (data) => {
          if (data) {
            this.form.patchValue(data);
            this.lastValues = this.form.value;
          }
        },
        error: (err) => console.error('Failed to load form', err),
      });
  }

  detectAndSaveChanges(values: any) {
    const changedField = Object.keys(values).find(
      (key) => values[key] !== this.lastValues[key]
    );

    if (changedField) {
      this.lastValues = { ...values };
      this.autoSave(changedField, values[changedField]);
    }
  }

  autoSave(fieldName: string, fieldValue: any) {
    this.savingMessage = 'Saving...';
    const payload = {
      user_id: this.userId,
      field_name: fieldName,
      field_value: fieldValue,
    };

    this.http.post('http://localhost:8000/api/auto-save', payload).subscribe({
      next: () => {
        this.savingMessage = 'All changes saved ✅';
        this.savingStatusClass = 'text-success';
      },
      error: () => {
        this.savingStatusClass = 'text-danger';
        this.savingMessage = 'Failed to save ❌';
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
  imports:[FormsModule,CommonModule]

})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  errorMessage: string = '';
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];

  //   this.employeeService.getEmployeeById(this.id).subscribe(data => {
  //     this.employee = data;
  //   }, error => console.log(error));
  // }

  // onSubmit(){
  //   //document.write("hello");
  //   this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
  //     this.goToEmployeeList();
  //   }
  //   , error => console.log(error));
  // }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
        this.errorMessage = ''; // Clear the error message when employee data is retrieved successfully
      },
      error => {
        console.log(error);
        this.errorMessage = 'Error occurred while fetching employee details';
      }
    );
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      () => {
        console.log('Employee updated successfully');
        this.errorMessage = ''; // Clear the error message when employee is successfully updated
        this.goToEmployeeList();
      },
      error => {
        console.error(error);
        this.errorMessage = error; // Store the error message
      }
    );
  }


  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}

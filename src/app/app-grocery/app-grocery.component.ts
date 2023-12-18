import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../assets/bootstrap-5.3.2-dist/css/bootstrap.min.css','app-grocery.component.css'],
})
export class AppGroceryComponent {
  task: string = '';
  tasks: { name: string; strike: boolean }[] = []; // Define tasks as an array of objects with 'name' and 'strike' properties

  deleteItem(task: string): void {
    const index = this.tasks.findIndex((task: { name: any; }) => task.name === task.name);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  onClick() {
    this.tasks.push({ name: this.task, strike: false });
    this.task = '';
  }
  editForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({})
    this.strikeElement();
    }

strikeElement(): void {
  const listGroup = document.querySelector('.list-group');

if(listGroup !==null)
listGroup.addEventListener('click', (e: Event) => {
      console.log("Button clicked");
        const target = e.target as HTMLElement;
        console.log(target.tagName)
        if (target.tagName === 'LI') {
          console.log("target is li");
            target.classList.toggle('list-group-item')
        }
        
    });
  }   
  
   
   
  }

   

  

  
  



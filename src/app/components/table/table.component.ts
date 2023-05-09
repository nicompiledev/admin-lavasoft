import { Component, ViewChild} from '@angular/core';
import{ MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


export interface UserTable{
  nombre: string;
  id: number;
  direccion: string;
  telefono: string;
}

const ELEMENT_DATA: UserTable[] = [
  {id: 1, nombre: 'Juan Pérez', direccion: 'Calle 123', telefono: '555-1234'},
  {id: 2, nombre: 'María González', direccion: 'Avenida 456', telefono: '555-5678'},
  {id: 3, nombre: 'Carlos Rodríguez', direccion: 'Calle 789', telefono: '555-9012'},
  {id: 4, nombre: 'Ana García', direccion: 'Avenida 345', telefono: '555-3456'},
  {id: 5, nombre: 'Pedro Martínez', direccion: 'Calle 678', telefono: '555-7890'},
  {id: 6, nombre: 'Lucía Hernández', direccion: 'Avenida 901', telefono: '555-2345'},
  {id: 7, nombre: 'Javier Gutiérrez', direccion: 'Calle 234', telefono: '555-6789'},
  {id: 8, nombre: 'Sara Sánchez', direccion: 'Avenida 567', telefono: '555-0123'},
  {id: 9, nombre: 'David López', direccion: 'Calle 890', telefono: '555-4567'},
  {id: 10, nombre: 'Isabel Torres', direccion: 'Avenida 123', telefono: '555-8901'},
  {id: 11, nombre: 'Alejandro Ruiz', direccion: 'Calle 456', telefono: '555-2345'},
  {id: 12, nombre: 'Laura Díaz', direccion: 'Avenida 789', telefono: '555-6789'},
  {id: 13, nombre: 'Ricardo Moreno', direccion: 'Calle 012', telefono: '555-1234'},
  {id: 14, nombre: 'Fernanda Cruz', direccion: 'Avenida 345', telefono: '555-5678'},
  {id: 15, nombre: 'Mauricio González', direccion: 'Calle 678', telefono: '555-9012'},
  {id: 16, nombre: 'Paola Hernández', direccion: 'Avenida 901', telefono: '555-3456'},
  {id: 17, nombre: 'Arturo Torres', direccion: 'Calle 234', telefono: '555-7890'},
  {id: 18, nombre: 'Gabriela Reyes', direccion: 'Avenida 567', telefono: '555-2345'},
  {id: 19, nombre: 'Francisco Vargas', direccion: 'Calle 890', telefono: '555-6789'},
  {id: 20, nombre: 'Daniela Valenzuela', direccion: 'Avenida 123', telefono: '555-0123'},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'nombre', 'direccion', 'telefono'];
  dataSource: MatTableDataSource<UserTable> = new MatTableDataSource<UserTable>(ELEMENT_DATA);

  ngAfterViewInit(){

    this.dataSource = new MatTableDataSource<UserTable>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



}

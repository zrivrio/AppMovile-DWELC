import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../service/providers.service';
import { ProvidersM } from '../../models/providers';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './provider-list.component.html',
  styleUrl: './provider-list.component.css'
})
export class ProviderListComponent implements OnInit {

  items : ProvidersM[] = [];

  constructor(private providerService : ProvidersService){}
  
  ngOnInit(): void {
   this.providerService.getProviders().subscribe( data => {
      this.items = data;
      console.log(data)
   });
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/models/project';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects = [
    {
      id: 'SP',
      name: 'Logistics management system',
      imgUrl: 'assets/img/sp_main.png',
      description: `
          It is an logistics web management system developed for a local food distributor, which required to keep
          track of its customers, their orders, their payments and balances owed, employees, their commissions,
          price lists, products and stock control . It also has a mobile development through which employees can consult
          and assemble orders to send.`
    },
    {
      id: 'DMA',
      name: 'Stocks DMA',
      imgUrl: 'assets/img/dma_1.png',
      description: `
          It's a real-time stock trading application which let the users to connect a
          <a href="https://www.byma.com.ar/" target="_blank">BYMA</a> and a
          <a href="https://www.matbarofex.com.ar/" target="_blank">MATBA-ROFEX</a> account to
          check the market indexes and stock prices, and be able to buy or sell any of them without needing to contact
          their clearance agents.
          <br>
          Also the application makes it's own connections to the markets to request the account information to validate
          that every operation has its economic support.
          <br>
          It has both a web module and a mobile app, available for iOS and Android.`
    },
    {
      id: 'USP',
      name: 'Unified Screening Platform',
      imgUrl: 'assets/img/usp.png',
      url: 'https://www.radventure.com/solutions/unified-screening-platform/',
      description: `
          USP is a flexible data management software environment that supports large scale screening programs but also
          smaller clinical trials. With USP, the population can be organized in target groups based on different
          parameters (such as the client’s age, gender, living area, previous studies result, etc). Based on these
          parameters each client is invited for a specific screening workflow and tracked from the first contact
          until the end of the screening.`
    }
  ];

  get(): Observable<Project[]> {
    return of(this.projects);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/models/project';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projects = [
    {
      id: 'CIM',
      name: 'Crypto Investment Monitor',
      imgUrl: 'assets/img/investment-monitor.png',
      url: 'https://investment-monitor.netlify.app/',
      description: `
          It centralizes cryptocurrencies market values in real-time and keeps an eye 24/7 of your own investment portfolio.
          It's developed in .NET and Angular, and it involves a lot of market knowledge,
          web socket connections & real-time updates in the UI with help of reactive state.
          <br>
          The main idea is to make the crypto investment easy-to-use and a bit fun too.
          It can be used anonymously, or you can create your own user
          (<a href="https://auth0.com/" target="_blank">Auth0</a> user authentication & management).`,
      tags: ['.NET', 'Angular', 'Binance', 'Blockchain', 'Crypto', 'Auth0', 'Azure']
    },
    {
      id: 'SP',
      name: 'Logistics management system',
      imgUrl: 'assets/img/sp_main.png',
      description: `
          It is an logistics web management system developed for a local food distributor, which required to keep
          track of its customers, their orders, their payments and balances owed, employees, their commissions,
          price lists, products and stock control . It also has a mobile development through which employees can consult
          and assemble orders to send.`,
      tags: ['.NET', 'Angular', 'AWS', 'MySQL']
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
          It has both a web module and a mobile app, available for iOS and Android.`,
      tags: ['.NET', 'Angular', 'Real-time', 'Stock market', 'Docker']
    },
    {
      id: 'USP',
      name: 'Unified Screening Platform',
      imgUrl: 'assets/img/usp.png',
      url: 'https://www.nelson-plus.org/',
      description: `
          USP is a flexible data management software environment that supports large scale screening programs but also
          smaller clinical trials. With USP, the population can be organized in target groups based on different
          parameters (such as the client’s age, gender, living area, previous studies result, etc). Based on these
          parameters each client is invited for a specific screening workflow and tracked from the first contact
          until the end of the screening.`,
      tags: ['.NET', 'Angular', 'Microservices', 'RabbitMQ', 'Docker', 'Kubernetes']
    }
  ];

  get(): Observable<Project[]> {
    return of(this.projects);
  }
}

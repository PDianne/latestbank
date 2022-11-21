import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data
      .subscribe((data: { user: any }) => {
        this.user = data.user.data;
      });
  }

  logOut() {
    sessionStorage.removeItem('jwt');
      window.location.reload();
      
    }
  }

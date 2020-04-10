import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ManifestoHomeComponent } from './manifesto-home/manifesto-home.component';

@Component({
    selector: 'app-manifesto',
    templateUrl: './manifesto.component.html',
    styleUrls: ['./manifesto.component.scss']
})
export class ManifestoComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}

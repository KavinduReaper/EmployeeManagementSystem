import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  generatePdf(){
    const documentDefinition = {
      content: [
        {
          text: 'EMS',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [{
              text: 'EMS',
              style: 'name'
            },
              {
                text: 'EMS'
              },
              {
                text: 'Email : ' + 'EMS'
              }
            ],
            [
              {
                text: 'Email2 : ' + 'EMS'
              }
            ]
          ]
        }
      ]
    };
    // tslint:disable-next-line:typedef
    pdfMake.createPdf(documentDefinition).open();
  }

}

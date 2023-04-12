import { Component } from '@angular/core';

@Component({
  selector: 'lib-miguel-malqui-footer',
  template: `
    <div class="footer-container">
  Copyright © 2023 |
  <a class="mailto" href="mailto:miguel.angel.malqui.cruz@gmail.com"
    >Miguel Angel Malqui Cruz</a
  >
</div>
  `,
  styles: [`
  .footer-container {
    width: 100%;
    padding: 0.5rem 0.5rem 5rem;

    background-color: #5C636A;
    color: #FFFFFF;

    text-align: center;

    a {
        color: #FFFFFF;  
    }
}
`
  ]
})
export class MiguelMalquiFooterComponent {}

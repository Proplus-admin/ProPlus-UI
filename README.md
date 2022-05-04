# ProPlus-UI
ProPlus Realestate

# Documentation
- [Documentation](https://www.proplusrealestate.ky/documentation)

## one time changes
## Install VS code and Git.

https://code.visualstudio.com/download

https://git-scm.com/download/win

## NPM Package Install

Run `npm install` to install all dependencies for the project. 

Please remember to undo any changes to `package.lock.json` after running `npm install`.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng s -o` for a dev server and automatically open it in a browser window.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running Linter

Run `ng lint` to execute the linter via [TSLint](https://palantir.github.io/tslint/).

## Design Patterns
### Component Example

Notes:
- HTML Template
    - Prefer to use classes over in-line style properties.
- SCSS 
    - Prefer to use variables for colors

Typescript
```
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
```
### Folder Structure Example
```
src
  └─app
  │ └─core
  │ └─modules
  │ │ └─home
  │ │ │ └─components
  │ └─shared
  │ └─shell
  └─assets
  │ └─styles
  │   │ _variable.scss
  │   └─_overrides
  └─environment
    │ environment.prod.ts
    │ environment.ts
```

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  version$ = this.http
    .get<Version>('/api/version')
    .pipe(map((res) => res.version));

  constructor(private http: HttpClient) {}
}

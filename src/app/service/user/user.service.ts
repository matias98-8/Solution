import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:80/leer.php';

  constructor(private http: HttpClient) { }

  public loginUsuario(login): any {
    console.log("ESTAMOS");
    return this.http.post(`${this.url}`, JSON.stringify(login));
  }

  checkEmail(email: string) {
     return of ({isEmailAvailable: email !== 'Matiasalva98.8@gmail.com'})
  }
  
}

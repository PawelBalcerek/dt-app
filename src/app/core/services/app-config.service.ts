import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private runtimeConfig: any;

  constructor(private httpClient: HttpClient) {
  }

  public loadRuntimeConfig(): Promise<any> {
    return this.httpClient.get('/assets/runtimeConfig.json')
      .toPromise()
      .then(data => this.runtimeConfig = data);
  }

  public getRuntimeConfig(): any {
    return this.runtimeConfig;
  }
}

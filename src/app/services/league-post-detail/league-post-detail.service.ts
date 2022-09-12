import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorHandlerService} from "../error-handler/error-handler.service";
import {MessageLoggerService} from "../message-logger/message-logger.service";
import {LeaguePostService} from "../league-post/league-post.service";
import {catchError, Observable, tap} from "rxjs";
import {LeagueDetails} from "../../interfaces/league-details";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LeaguePostDetailService {
  private leagueDetailsUrl: string = `${environment.baseUrl}/api/leaguePostDetails`;

  constructor(
    private messageService: MessageLoggerService,
    private errorHandler: ErrorHandlerService,
    private http: HttpClient
  ) { }

  getByLeagueId(id: number): Observable<LeagueDetails[]> {
    const url: string = `${this.leagueDetailsUrl}/?postId=${id}`;
    this.log(`get league post:${url}`)
    return this.http.get<LeagueDetails[]>(url)
      .pipe(
        tap((_) => this.log(`fetched league post id=${id}(TAP)`)),
        // TODO remove array from this code(now only working with array, but it's not valid)
        catchError(this.errorHandler.handleError<LeagueDetails[]>(`get league post id=${id}`))
      );
  }

  private log(message: string): void {
    this.messageService.add(LeaguePostService.name, message);
  }
}

import { Bean } from '../beans/bean';
import { Observable } from 'rxjs';
export interface SearchByKeywords {
  searchByKeywords(keywords: string): Observable<Bean[]>;
}
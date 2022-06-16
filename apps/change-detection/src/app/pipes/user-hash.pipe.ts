import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../interfaces/user";
import { getUserHash } from "../utils";

@Pipe({
  name: 'userHash',
  // pure: false,
})
export class UserHashPipe implements PipeTransform {

  transform(user: User): string {
    console.count(`getUserHash ${user.name}`);
    return getUserHash(user);
  }

}

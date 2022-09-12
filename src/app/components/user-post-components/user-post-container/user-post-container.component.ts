import {Component, OnInit} from '@angular/core';
import {UserPost} from "../../../interfaces/user-post";
import {UserPostService} from "../../../services/user-post/user-post.service";
import {MessageLoggerService} from "../../../services/message-logger/message-logger.service";
import {MatDialog} from "@angular/material/dialog";
import {User} from "../../../interfaces/user";
import {UserService} from "../../../services/user/user.service";
import {TextareaDialogComponent} from "../../dialog-components/textarea-dialog/textarea-dialog.component";

@Component({
  selector: 'app-user-post-container',
  templateUrl: './user-post-container.component.html',
  styleUrls: ['./user-post-container.component.css']
})
export class UserPostContainerComponent implements OnInit {

  private user?: User;
  userPosts: UserPost[] = [];
  isLoading: boolean = true;

  constructor(
    private userPostService: UserPostService,
    private userService: UserService,
    private messageLogger: MessageLoggerService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getUserPosts();
    this.getUser();
  }

  getUserPosts(): void {
    this.isLoading = true;
    this.userPostService.getUserPosts()
      .subscribe(userPosts => {
        this.userPosts = userPosts;
        this.messageLogger.add(UserPostContainerComponent.name, "getUserPosts: user posts fetched");
        this.isLoading = false;
      });
  }

  getUser(): void {
    this.userService.getUsers().subscribe(users => {
      if (users.length) {
        this.user = users[0];
      }
    });
  }

  openAddDialog(): void {
    const addDialog = this.dialog.open(TextareaDialogComponent, {
      width: "50em",
      data: {
        title: "Add Post",
        text: ""
      }
    });

    addDialog.afterClosed().subscribe(result => {
      if (this.user && result) {
        const userPost: UserPost = {
          id: 0,
          timestamp: new Date(),
          user: this.user,
          description: result,
          comments: []
        };
        this.addUserPost(userPost);
      }
    });
  }

  addUserPost(userPost: UserPost) {
    this.userPostService.addUserPost(userPost).subscribe(post => {
        this.userPosts.push(post);
        this.log(`addUserPost: add user post=${post.id}`);
      }
    );
  }

  log(message: string): void {
    this.messageLogger.add(UserPostContainerComponent.name, message);
  }
}

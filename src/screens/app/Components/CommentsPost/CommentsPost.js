import React from 'react'
import styles from './styles';
import moment from "moment";
import Comments from "react-native-comments";

export default class CommentsPost extends React.Component{
    state = {

    }
    extractUsername(c) {
        try {
          return c.email !== "" ? c.email : null;
        } catch (e) {
          console.log(e);
        }
      }
    
      extractBody(c) {
        try {
          return c.body && c.body !== "" ? c.body : null;
        } catch (e) {
          console.log(e);
        }
      }
    
      extractImage(c) {
        try {
          return c.image_id && c.user.image_id !== "" ? c.user.image_id : "";
        } catch (e) {
          console.log(e);
        }
      }
    
      extractChildrenCount(c) {
        try {
          return c.childrenCount || 0;
        } catch (e) {
          console.log(e);
        }
      }
    
      extractEditTime(item) {
        try {
          return item.updated_at;
        } catch (e) {
          console.log(e);
        }
      }
    
      extractCreatedTime(item) {
        try {
          return item.created_at;
        } catch (e) {
          console.log(e);
        }
      }
    
      likeExtractor(item) {
        return item.liked;
      }
    
      reportedExtractor(item) {
        return item.reported;
      }
    
      likesExtractor(item) {
        return item.likes.map(like => {
          return {
            image: like.image,
            name: like.username,
            user_id: like.user_id,
            tap: username => {
              console.log("Taped: " + username);
            }
          };
        });
      }
    isCommentChild(item) {
        return item.parentId !== null;
    }
    render(){
       const commentsData = 
        {
        "parentId": null,
        "commentId": 1,
        "name": "id labore ex et quam laborum",
        "liked": true,
        "reported": false,
        "likes": [
    
        ],
        "email": "testUser",
        "created_at": "2017-12-23 14:45:06",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        "children": [
            {
            "parentId": 1,
            "commentId": 2,
            "name": "quo vero reiciendis velit similique earum",
            "created_at": "2017-12-23 14:45:06",
            "liked": true,
            "reported": false,
            "likes": [
    
            ],
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
            {
            "parentId": 1,
            "commentId": 3,
            "name": "odio adipisci rerum aut animi",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": true,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            },
            {
            "parentId": 1,
            "commentId": 4,
            "name": "testUser",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": true,
            "likes": [
    
            ],
            "email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
            },
            {
            "parentId": 1,
            "commentId": 5,
            "name": "vero eaque aliquid doloribus et culpa",
            "created_at": "2017-12-23 14:45:06",
            "liked": true,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
            },
            {
            "parentId": 1,
            "commentId": 6,
            "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
            "created_at": "2017-12-23 14:45:06",
            "liked": true,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "testUser",
            "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
            },
            {
            "parentId": 1,
            "commentId": 7,
            "name": "repellat consequatur praesentium vel minus molestias voluptatum",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
    
    
            ],
            "email": "Dallas@ole.me",
            "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
            },
            {
            "parentId": 1,
            "commentId": 8,
            "name": "et omnis dolorem",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Mallory_Kunze@marie.org",
            "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
            },
            {
            "parentId": 1,
            "commentId": 9,
            "name": "provident id voluptas",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Meghan_Littel@rene.us",
            "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
            },
            {
            "parentId": 1,
            "commentId": 10,
            "name": "eaque et deleniti atque tenetur ut quo ut",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Carmen_Keeling@caroline.name",
            "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
            },
            {
            "parentId": 1,
            "commentId": 11,
            "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Veronica_Goodwin@timmothy.net",
            "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
            },
            {
            "parentId": 1,
            "commentId": 12,
            "name": "modi ut eos dolores illum nam dolor",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Oswald.Vandervort@leanne.org",
            "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
            },
            {
            "parentId": 1,
            "commentId": 13,
            "name": "aut inventore non pariatur sit vitae voluptatem sapiente",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Kariane@jadyn.tv",
            "body": "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
            },
            {
            "parentId": 1,
            "commentId": 14,
            "name": "et officiis id praesentium hic aut ipsa dolorem repudiandae",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Nathan@solon.io",
            "body": "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum"
            },
            {
            "parentId": 1,
            "commentId": 15,
            "name": "debitis magnam hic odit aut ullam nostrum tenetur",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": true,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Maynard.Hodkiewicz@roberta.com",
            "body": "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
            },
            {
            "parentId": 1,
            "commentId": 16,
            "name": "perferendis temporibus delectus optio ea eum ratione dolorum",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Christine@ayana.info",
            "body": "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis"
            },
            {
            "parentId": 1,
            "commentId": 17,
            "name": "eos est animi quis",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Preston_Hudson@blaise.tv",
            "body": "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore"
            },
            {
            "parentId": 1,
            "commentId": 18,
            "name": "aut et tenetur ducimus illum aut nulla ab",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Vincenza_Klocko@albertha.name",
            "body": "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias"
            },
            {
            "parentId": 1,
            "commentId": 19,
            "name": "sed impedit rerum quia et et inventore unde officiis",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Madelynn.Gorczany@darion.biz",
            "body": "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut"
            },
            {
            "parentId": 1,
            "commentId": 20,
            "name": "molestias expedita iste aliquid voluptates",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Mariana_Orn@preston.org",
            "body": "qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore"
            },
            {
            "parentId": 1,
            "commentId": 21,
            "name": "aliquid rerum mollitia qui a consectetur eum sed",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Noemie@marques.me",
            "body": "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus"
            },
            {
            "parentId": 1,
            "commentId": 22,
            "name": "porro repellendus aut tempore quis hic",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Khalil@emile.co.uk",
            "body": "qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum"
            },
            {
            "parentId": 1,
            "commentId": 23,
            "name": "quis tempora quidem nihil iste",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Sophia@arianna.co.uk",
            "body": "voluptates provident repellendus iusto perspiciatis ex fugiat ut\nut dolor nam aliquid et expedita voluptate\nsunt vitae illo rerum in quos\nvel eligendi enim quae fugiat est"
            },
            {
            "parentId": 1,
            "commentId": 24,
            "name": "in tempore eos beatae est",
            "created_at": "2017-12-23 14:45:06",
            "liked": false,
            "reported": false,
            "likes": [
                {
                "username": "someUser",
                "user_id": 345,
                "image": "https://ireview.live/img/no-user.png"
                }
            ],
            "email": "Jeffery@juwan.us",
            "body": "repudiandae repellat quia\nsequi est dolore explicabo nihil et\net sit et\net praesentium iste atque asperiores tenetur"
            }
        }
     ];
        handleLikeClick = () => {

        }
        return(
            console.log(commentsData);
            <Comments
            data={commentsData}
            keyExtractor={item => item.commentId}
            usernameExtractor={item => this.extractUsername(item)}
            keyExtractor={item => item.commentId}
            //Extract the key indicating comments parent
            parentIdExtractor={item => item.parentId}
            //what prop holds the comment owners username
            usernameExtractor={item => this.extractUsername(item)}
            //when was the comment last time edited
            editTimeExtractor={item => this.extractEditTime(item)}
            //When was the comment created
            createdTimeExtractor={item => this.extractCreatedTime(item)}
            //where is the body
            bodyExtractor={item => this.extractBody(item)}
            //where is the user image
            imageExtractor={item => this.extractImage(item)}
            //Where to look to see if user liked comment
            likeExtractor={item => this.likeExtractor(item)}
            //Where to look to see if user reported comment
            reportedExtractor={item => this.reportedExtractor(item)}
            //Where to find array with user likes
            likesExtractor={item => this.likesExtractor(item)}
            //Where to get nr of replies
            childrenCountExtractor={item => this.extractChildrenCount(item)}
            //what to do when user clicks submits edited comment
            saveAction={(text, parentCommentId) => {
                let date = moment().format("YYYY-MM-DD H:mm:ss");
            }}
            //what to do when user clicks submits edited comment
            editAction={(text, comment) => {
            }}
        />
        )
        } 
}
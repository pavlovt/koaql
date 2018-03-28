import Post from '../models/Post';

export default {
  Query: {
    /**
     * examle query:
       {
          post(id: 1) {
            id
            title
            user {
              id
              name
            }
          }
        }
     */
    async post(root: any, args: any, ctx: any) {
        return await Post.query().where({id: args.id}).eager('user').then(res => {
            console.log('res', res[0]);
            return res[0];
        })
    },

    /**
     * examle query:
       query {
          posts {
            id
            title
            text
            user {
              id
              name
            }
          }
        }
     */
    async posts(root: any, args: any, ctx: any) {
        return await Post.query().eager('user').then(res => {
            console.log('res', res);
            return res;
        })
    }
  }
}
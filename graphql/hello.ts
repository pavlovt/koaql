export default {
  Query: {
    hello(root: any, args: any, ctx: any) {
        console.log('ctx', ctx);
      return `Hello ${args.name}!`
    }
  }
}
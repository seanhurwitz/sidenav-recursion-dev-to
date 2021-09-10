const routes = {
  createPost: "/posts/create",
  viewPosts: "/posts/view",
  messageAuthor: "/posts/authors/message",
  viewAuthor: "/posts/authors/view",
  users: "/users",
};

const sidenavOptions = {
  posts: {
    title: "Posts",
    sub: {
      authors: {
        title: "Authors",
        sub: {
          message: {
            title: "Message",
            link: routes.messageAuthor,
          },
          view: {
            title: "View",
            link: routes.viewAuthor,
          },
        },
      },
      create: {
        title: "Create",
        link: routes.createPost,
      },
      view: {
        title: "View",
        link: routes.viewPosts,
      },
    },
  },
  users: {
    title: "Users",
    link: routes.users,
  },
};

export { sidenavOptions, routes };

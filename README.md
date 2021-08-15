# NodeJs Graphql MongoDB

Demo project.


## Run Server
```
npm run dev
```


## Open Graphiql in Browser

http://localhost:4000/graphql


## Graphiql Queries

### 1. Get all Posts
```
query allposts {
  getAllPosts {
    id
    title
  }
}
```

### 2. Create Posts
```
mutation createPost1 {
  createPost(post: {
    title: "Post 1"
    description: "This is post 1"
  }) {
    id
    title
    description
  }
}

mutation createPost2 {
  createPost(post: {
    title: "Post 2"
    description: "This is post 2"
  }) {
    id
    title
    description
  }
}

mutation createPost3 {
  createPost(post: {
    title: "Post 3"
    description: "This is post 3"
  }) {
    id
    title
    description
  }
}
```

### 3. Update Post
```
mutation updatePost {
  updatePost(id: "6119197924a82b2c352e6f6c", post: {
    title: "Post Three"
    # description: "This is post three"
  }) {
    id
    title
    description
  }
}
```

### 4. Delete Post
```
mutation deletePost {
  deletePost(id: "611916f7beaebb2bf186da70")
}
```

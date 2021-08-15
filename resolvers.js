const Post = require('./model/Post.model');

const resolvers = {
    Query: {
        hello: () => {
            return "Hello world";
        },
        getAllPosts: async () => {
            const posts = await Post.find();
            return posts;
        },
        getPost: async (arent, args, context, info) => {
            const { id } = args;
            return await Post.findById(id);
        }
    },
    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { title, description } = args.post;
            console.log(title, description);

            const post = new Post({ title, description });
            await post.save();
            return post;
        },
        updatePost: async (parent, args, context, info) => {
            const { id } = args;
            const { title, description } = args.post;

            // To only update the provided fields
            const updates = {};
            if (title !== undefined) {
                updates.title = title;
            }
            if (description !== undefined) {
                updates.description = description;
            }

            const post = await Post.findByIdAndUpdate(id, /*{ title, description }*/ updates, {new: true});  // {new: true} to return the newly saved document.
            return post;
        },
        deletePost: async (parent, args, context, info) => {
            const { id } = args;
            await Post.findByIdAndDelete(id);
            return "Ok, post deleted";
        }
    }
};

module.exports = resolvers;

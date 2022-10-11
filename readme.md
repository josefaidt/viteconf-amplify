# ViteConf - AWS Amplify

Demo application for [ViteConf](https://viteconf.org/schedule/vite__aws_amplify)

1. `gh repo fork josefaidt/viteconf-amplify`
2. `pnpm add --global @aws-amplify/cli` install the AWS Amplify CLI
3. `pnpm install` install dependencies
4. `amplify init` initialize Amplify project locally
5. `amplify push` push Amplify resources

## Resources

- [AWS Amplify documentation](https://docs.amplify.aws/)
- [Vite documentation](https://vitejs.dev/)

## Create Your Own Vite + AWS Amplify project

1. `pnpm create vite --template react-ts` create your Vite project
2. `amplify init` [create your Amplify project](https://docs.amplify.aws/cli/start/workflows/)
3. `git init && gh repo create --source .` create a GitHub repository
   a. `git add . && git commit -m '🚀' && git push -u origin main` push changes to git
4. `amplify add hosting` [add Hosting to your Amplify project](https://docs.amplify.aws/cli/hosting/hosting/)
   a. connect to new GitHub repository
5. `amplify push` push Amplify resources

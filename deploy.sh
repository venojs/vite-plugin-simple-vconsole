#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
pnpm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# git init
git add -A
git commit -m 'deploy'

# 首次部署
# git remote add origin https://github.com/venojs/venojs.github.io.git
# git branch -M main
# git push -u origin main

# 后续部署
git push -f https://github.com/venojs/venojs.github.io.git main:main

cd -
# 如果执行失败，看看换行是不被改成 CRLF 了
# Linux 只能用 LF

find . \( -path "./_book" -prune \) -o \( -path "./_test" -prune \) -o \( -path "./anno/*" -prune -type d \) -o \( -path "./logs" -prune \) -o \( -path "./node_modules" -prune \) -o \( -path "./archives/markdown.md" -prune \) -o \( -path "./docs/How-To-Ask-Questions-The-Smart-Way.md" -prune \) -o -name "*.md" -print0 | xargs -0 markdownlint-cli2

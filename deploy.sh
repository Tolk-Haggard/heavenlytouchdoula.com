aws.exe s3 sync --include "*.htm" --exclude ".git/*" --exclude "LICENSE" --exclude "README.md" --exclude "deploy.sh" . s3://heavenlytouchdoula.com/

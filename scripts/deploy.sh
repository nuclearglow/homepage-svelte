# deploy files
rsync --archive --verbose --human-readable --delete $LOCAL_PATH $REMOTE_USERNAME@$REMOTE_SERVER:$REMOTE_PATH

function list_child_processes () {
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 18024;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 18024 > /dev/null;
done;

for child in $(list_child_processes 18058);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/joshglenbritoavila/Projects/JshApp/bin/Debug/net7.0/1214bea4e97d4a3f9315c7de7e8ddfb2.sh;

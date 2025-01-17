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

ps 10918;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 10918 > /dev/null;
done;

for child in $(list_child_processes 10937);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/joshglenbritoavila/Projects/JshApp/bin/Debug/net7.0/a949a88d5d01474a8f076a3b8a5f7e02.sh;

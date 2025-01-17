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

ps 34894;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 34894 > /dev/null;
done;

for child in $(list_child_processes 35036);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/joshglenbritoavila/Projects/JshApp/bin/Debug/net7.0/b5fb5d992f874c1c81b682d9c5b99445.sh;

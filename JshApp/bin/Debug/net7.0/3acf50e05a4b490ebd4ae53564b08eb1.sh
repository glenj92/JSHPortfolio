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

ps 85713;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 85713 > /dev/null;
done;

for child in $(list_child_processes 85725);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/joshglenbritoavila/Projects/JshApp/bin/Debug/net7.0/3acf50e05a4b490ebd4ae53564b08eb1.sh;

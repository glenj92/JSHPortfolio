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

ps 67577;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 67577 > /dev/null;
done;

for child in $(list_child_processes 67586);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/joshglenbritoavila/Projects/JshApp/bin/Debug/net7.0/4fbc2de5dcb0492b97200a1bd5ab5dc9.sh;

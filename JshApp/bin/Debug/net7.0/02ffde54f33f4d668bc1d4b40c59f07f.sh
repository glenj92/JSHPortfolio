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

ps 46073;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 46073 > /dev/null;
done;

for child in $(list_child_processes 46092);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/joshglenbritoavila/Projects/JshApp/bin/Debug/net7.0/02ffde54f33f4d668bc1d4b40c59f07f.sh;

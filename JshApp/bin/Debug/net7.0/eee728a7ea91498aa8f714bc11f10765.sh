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

ps 88406;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 88406 > /dev/null;
done;

for child in $(list_child_processes 88417);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/joshglenbritoavila/Projects/JshApp/bin/Debug/net7.0/eee728a7ea91498aa8f714bc11f10765.sh;

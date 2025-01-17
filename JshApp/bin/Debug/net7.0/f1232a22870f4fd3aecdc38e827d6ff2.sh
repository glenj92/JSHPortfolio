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

ps 98939;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 98939 > /dev/null;
done;

for child in $(list_child_processes 98977);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/joshglenbritoavila/Projects/JshApp/bin/Debug/net7.0/f1232a22870f4fd3aecdc38e827d6ff2.sh;

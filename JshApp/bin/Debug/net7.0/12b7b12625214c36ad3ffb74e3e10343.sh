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

ps 13136;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 13136 > /dev/null;
done;

for child in $(list_child_processes 13156);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/joshglenbritoavila/Projects/JSHPortfolio/JshApp/bin/Debug/net7.0/12b7b12625214c36ad3ffb74e3e10343.sh;

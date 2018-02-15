/usr/sbin/nginx&
uwsgi --enable-threads --ini /tmp/lagriffardiere_uwsgi.ini&
while [ ! -f /var/log/uwsgi/lagriffardiere_uwsgi.log ]
do
  echo "waiting for uwsgi log file to be generated..."
  sleep 1
done
tail -f /var/log/uwsgi/lagriffardiere_uwsgi.log /var/log/nginx/error.log

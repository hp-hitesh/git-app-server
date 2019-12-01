


sudo docker container run -itd --name mydb -p 9099:3306 mydb

mysql -u root --port 9099 --protocol tcp -p

docker image build -t mydb .

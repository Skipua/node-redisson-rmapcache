# node-redisson-rmapcache
Reads from HSET, where values were inserted by Redisson's RMapCache

Redisson prepends metadata to value itself in some cases (RMapCache is one of them).
This repo uses lua script to "unpack" it so that we could use redis from nodejs (when java redisson lib is used to push data)

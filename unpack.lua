local function unpackValue(val)
   local a, unpacked = struct.unpack('dLc0', val)
   return unpacked
end

local val = redis.call('hget', KEYS[1], KEYS[2]);
if val ~= false then
    if pcall(unpackValue, val) then
        return unpackValue(val)
    else
        return val
    end
end
return 'no value';
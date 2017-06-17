#!/bin/python

import sys
import os

pwd = os.path.dirname(os.path.abspath(__file__))

out = pwd+'/data.js'

if len(sys.argv) > 1: pwd = str(sys.argv[1])

def getpredata(pwd):
	r = 'var data = { "title": "'+pwd+'", "parent": { "name": "'+pwd+'", "sons": ['
	return r

def getpostdata():
	r = ' ] } };'
	return r

def getpathdata(name):
	if name != '/' and name[-1:] == '/': name = name[:-1]
	r = '{"name": "'+os.path.basename(name)+'", "sons": ['
	for el in [ n for n in os.listdir(name) if os.path.isdir(os.path.join(name, n)) and n[:1] != '.' ]:
		r += getpathdata(name+'/'+el)
	r += ' ] },'
	return r

def getdata(pwd):
	r = getpredata(pwd)
	r += getpathdata(pwd)
	r += getpostdata()
	return r

r = getdata(pwd)
out_file = open(out, 'w')
out_file.write(r)
out_file.close()

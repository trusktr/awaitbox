# save needed root files before cleaning. Save needed .js files, .js.map files,
# and directories. Feel free to add to the list. This section is all you need
# to modify.
mkdir save &&
mv \
    .git \
    src \
    scripts \
    webpack.config.js \
save &&

# done modifying (unless you know what you're doing) -----------------------------

# remove built files and folders (except for the save/ folder).
rm -rf ./*.js ./*.js.map `find . -maxdepth 1 -type d | cut -d/ -f2 | grep -v '^save$' | grep -v '^.$'` &&
mv save/* save/.* . &&
rmdir save

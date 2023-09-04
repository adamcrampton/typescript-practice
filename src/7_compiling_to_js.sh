# =====================================
# COMPILING - Example code, do not run!
# =====================================
# Initializing
#
# Creates a tsconfig.json file (run in project root)
# Contains build options - see tsconfig reference for all settings
# https://www.typescriptlang.org/tsconfig
tsc --init

# Compile all ts files in project root and nested directories
tsc

# Listening for changes (w = "watch")
tsc -w # or
tsc --w # or
tsc -w index.ts # or
tsc index.ts --w

# Config tips: 
# - A files array can be declared in tsconfig to specify a list of files *only* to compile (note: it needs to be added to the top level of the main object)
# - Include + Exclude options allow you to specify directories with patterns/wildcards (note: they need to be added to the top level of the main object)
# - Outdir option (already included in object) for specifying output folder (use ./dist for most cases)
# - Target option for setting JS version of output (e.g. ES6)

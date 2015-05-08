var path = require('path');
var os   = require('os');

function isDarwin() {
    return os.platform() == 'darwin';
}

function isWindows() {
    return os.platform() == 'win32';
}

function isUnix() {
    return os.platform() == 'linux';
}

function is64bit() {
    return os.arch() == 'x64';
}

function mangleName(name, version, debug) {

    var prefix = '', suffix = '', ext = '';

    if (isWindows())
    {
        prefix = 'lib';
        suffix = '-vc120-mt-s' + (debug ? 'gd' : '');
        ext = '.lib';
    }
    else if (isDarwin())
    {
        prefix = 'lib';
        suffix = '-mt';
        ext = '.a';
    }
    else if (isUnix())
    {
        prefix = 'lib';
        suffix = '';
        ext = '.a';
    }

    return prefix + name + suffix + ext;
}

module.exports = {
    version: '1_56',

    libraries: function(debug) {
        
        var bst_libraries = [];

            var boost_lib_dir = path.resolve(__dirname, 'boost', 'lib');

            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_atomic',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_chrono',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_container',           this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_context',             this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_coroutine',           this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_date_time',           this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_exception',           this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_filesystem',          this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_graph',               this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_iostreams',           this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_locale',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_log_setup',           this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_log',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_c99f',           this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_c99l',           this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_c99',            this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_tr1f',           this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_tr1l',           this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_tr1',            this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_prg_exec_monitor',    this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_program_options',     this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_python',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_random',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_regex',               this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_serialization',       this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_signals',             this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_system',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_test_exec_monitor',   this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_thread',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_timer',               this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_unit_test_framework', this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_wave',                this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_zlib',                this.version, debug));

            console.log(bst_libraries.join(';'));
        }
        
        if (isUnix()) {
            var boost_lib_dir = path.resolve(__dirname, 'boost', 'lib');

            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_atomic',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_chrono',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_container',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_date_time',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_exception',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_filesystem',             this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_graph',                  this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_iostreams',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_locale',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_log_setup',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_log',                    this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_c99f',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_c99l',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_c99',               this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_tr1f',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_tr1l',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_tr1',               this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_prg_exec_monitor',       this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_program_options',        this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_random',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_regex',                  this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_serialization',          this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_signals',                this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_system',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_test_exec_monitor',      this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_thread',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_timer',                  this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_unit_test_framework',    this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_wave',                   this.version, debug));

            console.log(bst_libraries.join(' '));
        }
        
        if (isDarwin()) {
            var boost_lib_dir = path.resolve(__dirname, 'boost', 'lib');

            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_atomic',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_chrono',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_container',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_date_time',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_exception',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_filesystem',             this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_graph',                  this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_iostreams',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_locale',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_log_setup',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_log',                    this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_c99f',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_c99l',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_c99',               this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_tr1f',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_tr1l',              this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_math_tr1',               this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_prg_exec_monitor',       this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_program_options',        this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_random',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_regex',                  this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_serialization',          this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_signals',                this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_system',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_test_exec_monitor',      this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_thread',                 this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_timer',                  this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_unit_test_framework',    this.version, debug));
            bst_libraries.push(boost_lib_dir + '/' + mangleName('boost_wave',                   this.version, debug));

            console.log(bst_libraries.join(' '));
        }
    },

    include_dirs: function() {
        console.log(path.resolve(__dirname, 'boost', 'include'));
    }
};

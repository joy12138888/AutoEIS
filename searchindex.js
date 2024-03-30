Search.setIndex({"docnames": ["basic_usage", "circuit", "generated/autoeis.core", "generated/autoeis.io", "generated/autoeis.parser", "generated/autoeis.utils", "generated/autoeis.visualization", "generated/generated/autoeis.core.filter_implausible_circuits", "generated/generated/autoeis.core.generate_equivalent_circuits", "generated/generated/autoeis.core.perform_bayesian_inference", "generated/generated/autoeis.core.perform_full_analysis", "generated/generated/autoeis.core.preprocess_impedance_data", "generated/generated/autoeis.io.get_assets_path", "generated/generated/autoeis.io.load_test_circuits", "generated/generated/autoeis.io.load_test_dataset", "generated/generated/autoeis.io.parse_ec_output", "generated/generated/autoeis.parser.convert_to_impedance_format", "generated/generated/autoeis.parser.count_parameters", "generated/generated/autoeis.parser.find_ohmic_resistors", "generated/generated/autoeis.parser.get_component_labels", "generated/generated/autoeis.parser.get_component_types", "generated/generated/autoeis.parser.get_parameter_labels", "generated/generated/autoeis.parser.get_parameter_types", "generated/generated/autoeis.parser.group_parameters_by_component", "generated/generated/autoeis.parser.group_parameters_by_type", "generated/generated/autoeis.parser.parse_component", "generated/generated/autoeis.parser.parse_parameter", "generated/generated/autoeis.parser.validate_circuit", "generated/generated/autoeis.parser.validate_parameter", "generated/generated/autoeis.utils.are_circuits_equivalent", "generated/generated/autoeis.utils.circuit_complexity", "generated/generated/autoeis.utils.fit_circuit_parameters", "generated/generated/autoeis.utils.generate_circuit_fn", "generated/generated/autoeis.utils.generate_circuit_fn_impedance_backend", "generated/generated/autoeis.utils.initialize_priors", "generated/generated/autoeis.utils.initialize_priors_from_posteriors", "generated/generated/autoeis.utils.validate_circuits_dataframe", "generated/generated/autoeis.visualization.draw_circuit", "generated/generated/autoeis.visualization.plot_impedance_combo", "generated/generated/autoeis.visualization.plot_linKK_residuals", "generated/generated/autoeis.visualization.plot_nyquist", "generated/generated/autoeis.visualization.set_plot_style", "generated/generated/autoeis.visualization.show_nticks", "index", "installation", "modules"], "filenames": ["basic_usage.md", "circuit.md", "generated/autoeis.core.rst", "generated/autoeis.io.rst", "generated/autoeis.parser.rst", "generated/autoeis.utils.rst", "generated/autoeis.visualization.rst", "generated/generated/autoeis.core.filter_implausible_circuits.rst", "generated/generated/autoeis.core.generate_equivalent_circuits.rst", "generated/generated/autoeis.core.perform_bayesian_inference.rst", "generated/generated/autoeis.core.perform_full_analysis.rst", "generated/generated/autoeis.core.preprocess_impedance_data.rst", "generated/generated/autoeis.io.get_assets_path.rst", "generated/generated/autoeis.io.load_test_circuits.rst", "generated/generated/autoeis.io.load_test_dataset.rst", "generated/generated/autoeis.io.parse_ec_output.rst", "generated/generated/autoeis.parser.convert_to_impedance_format.rst", "generated/generated/autoeis.parser.count_parameters.rst", "generated/generated/autoeis.parser.find_ohmic_resistors.rst", "generated/generated/autoeis.parser.get_component_labels.rst", "generated/generated/autoeis.parser.get_component_types.rst", "generated/generated/autoeis.parser.get_parameter_labels.rst", "generated/generated/autoeis.parser.get_parameter_types.rst", "generated/generated/autoeis.parser.group_parameters_by_component.rst", "generated/generated/autoeis.parser.group_parameters_by_type.rst", "generated/generated/autoeis.parser.parse_component.rst", "generated/generated/autoeis.parser.parse_parameter.rst", "generated/generated/autoeis.parser.validate_circuit.rst", "generated/generated/autoeis.parser.validate_parameter.rst", "generated/generated/autoeis.utils.are_circuits_equivalent.rst", "generated/generated/autoeis.utils.circuit_complexity.rst", "generated/generated/autoeis.utils.fit_circuit_parameters.rst", "generated/generated/autoeis.utils.generate_circuit_fn.rst", "generated/generated/autoeis.utils.generate_circuit_fn_impedance_backend.rst", "generated/generated/autoeis.utils.initialize_priors.rst", "generated/generated/autoeis.utils.initialize_priors_from_posteriors.rst", "generated/generated/autoeis.utils.validate_circuits_dataframe.rst", "generated/generated/autoeis.visualization.draw_circuit.rst", "generated/generated/autoeis.visualization.plot_impedance_combo.rst", "generated/generated/autoeis.visualization.plot_linKK_residuals.rst", "generated/generated/autoeis.visualization.plot_nyquist.rst", "generated/generated/autoeis.visualization.set_plot_style.rst", "generated/generated/autoeis.visualization.show_nticks.rst", "index.rst", "installation.md", "modules.rst"], "titles": ["Basic usage", "Circuit notation", "core", "io", "parser", "utils", "visualization", "filter_implausible_circuits", "generate_equivalent_circuits", "perform_bayesian_inference", "perform_full_analysis", "preprocess_impedance_data", "get_assets_path", "load_test_circuits", "load_test_dataset", "parse_ec_output", "convert_to_impedance_format", "count_parameters", "find_ohmic_resistors", "get_component_labels", "get_component_types", "get_parameter_labels", "get_parameter_types", "group_parameters_by_component", "group_parameters_by_type", "parse_component", "parse_parameter", "validate_circuit", "validate_parameter", "are_circuits_equivalent", "circuit_complexity", "fit_circuit_parameters", "generate_circuit_fn", "generate_circuit_fn_impedance_backend", "initialize_priors", "initialize_priors_from_posteriors", "validate_circuits_dataframe", "draw_circuit", "plot_impedance_combo", "plot_linKK_residuals", "plot_nyquist", "set_plot_style", "show_nticks", "AutoEIS: Automated EIS Analysis", "Installation", "API Reference"], "terms": {"To": [0, 35], "us": [0, 1, 5, 8, 9, 16, 29, 31, 32, 33, 35, 37, 41, 44, 45], "autoei": [0, 1, 2, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45], "you": [0, 43, 44], "can": [0, 44], "either": 0, "perform": [0, 8, 9, 10, 45], "circuit": [0, 4, 7, 8, 9, 10, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 29, 30, 31, 32, 33, 34, 35, 36, 37, 43, 45], "gener": [0, 8, 10, 32, 33, 35], "bayesian": [0, 9, 10], "infer": [0, 9, 10], "step": [0, 11], "perform_full_analysi": 0, "function": [0, 2, 3, 4, 5, 6, 27, 29, 31, 32, 33, 34, 36, 45], "whole": 0, "process": 0, "automat": [0, 43, 44], "The": [0, 1, 11, 16, 17, 25, 26, 29, 43, 44], "follow": [0, 1, 10, 11, 44], "i": [0, 1, 8, 9, 10, 11, 13, 19, 20, 21, 22, 27, 28, 29, 30, 31, 32, 35, 36, 38, 39, 40, 41, 42, 44], "minim": 0, "exampl": [0, 1, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 30], "how": [0, 30], "import": [0, 3, 44], "ae": 0, "load": 0, "visual": [0, 37, 38, 39, 40, 41, 42, 45], "test": [0, 13, 14], "dataset": [0, 13, 14], "freq": [0, 8, 9, 10, 11, 31, 38, 39], "z": [0, 8, 9, 10, 11, 31, 38, 40], "io": [0, 12, 13, 14, 15, 45], "load_test_dataset": 0, "plot_impedance_combo": 0, "autom": [0, 10], "ei": [0, 3, 6, 10, 38, 40], "analysi": [0, 10, 45], "iter": [0, 8, 9, 10, 15, 31, 34, 35], "24": 0, "parallel": [0, 1, 8, 10], "true": [0, 8, 9, 10, 13, 20, 22, 27, 28, 29, 32, 38, 41, 42], "print": 0, "summari": 0, "result": [0, 3, 6, 10, 11, 29], "mcmc": [0, 9, 10], "statu": 0, "chain": [0, 9, 18], "stat": 0, "zip": 0, "circuitstr": [0, 15, 36], "0": [0, 8, 9, 10, 11, 30], "print_summary_statist": 0, "while": 0, "abov": [0, 1], "should": 0, "work": [0, 44], "out": [0, 11], "box": [0, 11], "recommend": [0, 44], "fashion": 0, "have": [0, 36, 43, 44], "more": [0, 29], "control": 0, "over": 0, "furthermor": 0, "ll": 0, "learn": 0, "about": 0, "inner": 0, "thi": [0, 27, 29, 31, 34, 36, 44], "wai": [0, 44], "an": [0, 29, 43], "notebook": 0, "demonstr": 0, "detail": [0, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 29, 30, 31, 32, 33, 37], "found": 0, "here": [0, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 29, 30, 31, 32, 33, 37], "apart": 0, "from": [0, 25, 26, 43], "ar": [0, 1, 13, 29, 35, 36], "yet": 0, "document": 0, "until": 0, "we": [0, 43], "add": 0, "featur": 0, "find": [0, 18, 43, 45], "full": 0, "list": [0, 9, 15, 18, 19, 20, 21, 22, 23, 24, 30, 34, 35, 38], "api": [0, 43], "refer": [0, 43], "section": [0, 11, 29], "custom": 1, "repres": 1, "model": [1, 37, 43], "base": [1, 9, 10, 11, 35, 44], "two": [1, 29], "rule": [1, 7], "element": [1, 27, 34, 35], "seri": 1, "separ": 1, "symbol": 1, "enclos": 1, "squar": [1, 11], "bracket": 1, "For": [1, 35, 44], "r1": [1, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 30], "c2": 1, "r3": 1, "p4": [1, 16, 17, 18, 19, 20, 21, 22, 23, 24], "r5": [1, 18, 30], "r6": 1, "c7": 1, "As": 1, "compon": [1, 10, 19, 20, 23, 24, 25, 30], "name": [1, 27, 31, 34, 35, 36, 44], "convent": 1, "r": [1, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], "resistor": [1, 18], "c": [1, 25, 26, 27, 28], "capacitor": 1, "l": [1, 25, 26, 27, 28], "inductor": 1, "p": [1, 16, 20, 23, 25, 26, 27, 28], "constant": 1, "phase": 1, "cpe": [1, 34, 35], "each": 1, "parameter": [1, 32, 33], "singl": 1, "valu": [1, 30, 31, 34], "which": 1, "ohm": 1, "farad": 1, "henri": 1, "respect": [1, 36], "magnitud": 1, "q": 1, "w": 1, "expon": [1, 34, 35], "alpha": [1, 40], "n": [1, 28, 42], "equat": 1, "z_": 1, "frac": 1, "1": [1, 9, 30, 31, 40, 44], "time": [1, 44], "j": 1, "omega": 1, "consid": [1, 11, 29], "correspond": [1, 8, 9, 10, 11, 31, 38, 39], "p4w": [1, 21, 23, 24], "p4n": [1, 21, 23, 24], "other": 1, "basic": [1, 43], "paramet": [1, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42], "same": [1, 44], "collect": [2, 3, 4, 5, 6], "export": 3, "data": [3, 6, 8, 9, 10, 11, 14, 31, 36, 38, 40, 45], "pars": [4, 15, 45], "string": [4, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 36, 37, 45], "throughout": 5, "packag": [5, 43, 44], "core": [7, 8, 9, 10, 11, 45], "datafram": [7, 8, 9, 10, 13, 15, 36], "appli": [7, 42], "heurist": [7, 29], "exclud": 7, "implaus": 7, "pd": [7, 8, 9, 10, 13, 15, 36], "contain": [7, 8, 9, 10, 11, 13, 15, 27, 36, 45], "return": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40], "filter": [7, 11, 13, 19, 21, 42], "type": [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], "ndarrai": [8, 9, 10, 11, 14, 31, 35, 38, 39, 40], "float": [8, 9, 10, 11, 14, 29, 31, 34, 35, 38, 39], "complex": [8, 9, 10, 11, 14, 30, 31, 32, 38, 40], "int": [8, 9, 10, 17, 30, 31, 38, 40, 42], "100": [8, 10], "12": 8, "tol": [8, 10], "01": [8, 10], "bool": [8, 9, 10, 13, 20, 22, 27, 28, 29, 32, 38, 41, 42], "30": 8, "population_s": 8, "seed": [8, 9], "none": [8, 9, 19, 21, 31, 38, 39, 40], "candid": [8, 13], "fit": [8, 10, 13, 31, 35, 45], "imped": [8, 9, 10, 11, 14, 16, 31, 32, 33, 38, 40, 43], "evolutionari": 8, "algorithm": 8, "np": [8, 9, 10, 11, 14, 31, 35, 38, 39, 40], "frequenc": [8, 9, 10, 11, 14, 29, 31, 32, 33, 38, 39], "measur": [8, 10, 11], "arrai": [8, 9, 10, 11, 14], "option": [8, 9, 10, 13, 19, 20, 21, 22, 29, 31, 32, 35, 38, 39, 40, 41, 42, 44], "number": [8, 9, 10, 17, 28, 31, 42], "ecm": [8, 10, 13, 15, 43], "default": [8, 9, 10, 13, 19, 20, 21, 22, 29, 31, 32, 35, 38, 39, 40, 41, 42], "search": 8, "space": 8, "converg": [8, 10, 31], "threshold": [8, 10], "1e": [8, 10, 29, 31], "2": [8, 10, 30, 38], "If": [8, 9, 10, 13, 20, 22, 32, 36, 38, 41, 42, 43, 44], "per": 8, "random": [8, 9, 29], "reproduc": [8, 9], "str": [9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 40], "p0": [9, 31, 34], "map": [9, 34, 35], "num_warmup": [9, 10], "2500": [9, 10], "num_sampl": [9, 10], "1000": [9, 10, 11, 31], "num_chain": 9, "progress_bar": 9, "refine_p0": 9, "fals": [9, 13, 20, 22, 27, 28, 29, 32, 42], "tupl": [9, 11, 14, 38, 39, 40], "initi": [9, 31, 34], "guess": [9, 31, 34], "warmup": [9, 10], "sampl": [9, 10], "progress": 9, "bar": 9, "displai": 9, "refin": 9, "fitter": [9, 31], "object": 9, "exit": 9, "code": 9, "success": 9, "fail": 9, "numpyro": 9, "tol_linkk": [10, 11], "05": [10, 11, 29], "plausibl": [10, 13, 43], "done": 10, "toler": [10, 11, 29, 31], "accept": [10, 11], "linkk": [10, 11], "residu": [10, 11, 39], "high_freq_threshold": 11, "preprocess": 11, "clean": 11, "up": 11, "doe": [11, 36], "discard": 11, "invalid": 11, "high": 11, "see": [11, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 29, 30, 31, 32, 33, 37], "note": [11, 29, 31, 34, 35], "posit": 11, "imaginari": [11, 32, 39], "part": [11, 32, 39], "enforc": 11, "kramer": [11, 39], "kronig": [11, 39], "valid": [11, 27, 28, 36, 39], "aka": 11, "lin": 11, "kk": 11, "lower": 11, "bound": 11, "what": [11, 35], "dictionari": [11, 23, 24, 31, 34, 35, 36], "kei": 11, "res_real": [11, 39], "real": [11, 32, 39], "res_imag": [11, 39], "rmse": 11, "root": 11, "mean": [11, 35], "error": 11, "v": 11, "path": [12, 44], "asset": 12, "folder": [12, 44], "onli": [13, 18, 42], "physic": 13, "output": 15, "equivalentcircuit": [15, 44], "jl": [15, 44], "": [15, 31, 41, 44], "circuit_evolut": 15, "stringifi": 15, "col": 15, "parser": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 45], "convert": 16, "format": [16, 29, 36, 40], "py": [16, 33], "cdc": [16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 29, 30, 31, 32, 33, 37], "represent": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 37], "input": [16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 30, 31, 32, 33, 37], "r2": [16, 17, 18, 19, 20, 21, 22, 23, 24], "cpe4": 16, "present": 17, "4": [17, 40], "all": [18, 19, 21], "ohmic": 18, "main": 18, "A": [18, 19, 20, 21, 22, 23, 24, 30, 32, 33], "label": [18, 19, 21, 23, 24, 25, 26, 28, 38, 40], "uniqu": [20, 22], "pw": [22, 24, 26, 28], "pn": [22, 24, 26, 28], "dict": [23, 24, 31, 34, 35], "group": [23, 24], "set": [25, 26, 29], "p2n": [25, 26], "check": [27, 28, 29], "ensur": [27, 36], "empti": 27, "doesn": [27, 44], "t": [27, 44], "duplic": 27, "e": [27, 28, 29, 35, 36], "g": [27, 28, 35], "p2": [27, 30], "otherwis": [27, 28, 29, 32], "where": 28, "p1n": 28, "util": [29, 30, 31, 32, 33, 34, 35, 36, 45], "circuit1": 29, "circuit2": 29, "rtol": 29, "equival": [29, 43], "first": [29, 44], "second": 29, "rel": 29, "5": 29, "approxim": 29, "evalu": [29, 31], "close": 29, "enough": 29, "comput": [30, 32, 33], "defin": 30, "deep": 30, "nest": 30, "p3": 30, "r4": 30, "maxfev": 31, "ftol": 31, "13": 31, "maximum": 31, "criterion": 31, "scipi": 31, "curve_fit": 31, "jit": 32, "concat": 32, "jax": 32, "compil": 32, "concaten": 32, "take": [32, 33], "callabl": [32, 33], "variabl": [34, 35], "distribut": [34, 35, 44], "prior": [34, 35], "given": 34, "assign": 34, "uniform": 34, "log": [34, 35], "normal": [34, 35], "rest": 34, "posterior": 35, "dist_typ": 35, "lognorm": 35, "creat": [35, 44], "new": [35, 44], "specifi": 35, "fitte": 35, "std": 35, "etc": 35, "truncat": 35, "matter": 35, "properli": 36, "specif": 36, "column": 36, "must": [36, 38], "rais": 36, "valueerror": 36, "correct": 36, "figur": [37, 38, 39, 40], "draw": 37, "lcapi": 37, "fig": 37, "handl": 37, "size": [38, 40], "10": [38, 42], "ax": [38, 39, 40, 42], "scatter": 38, "plot": [38, 39, 40, 41, 45], "nyquist": [38, 40], "bode": 38, "marker": [38, 40], "plt": [38, 39, 40, 42], "length": 38, "linear": 39, "fmt": 40, "o": 40, "color": 40, "transpar": 40, "use_arviz": 41, "use_seaborn": 41, "use_flexoki": 41, "modifi": [41, 42], "arviz": 41, "matplotlib": [41, 42], "config": 41, "prettier": 41, "style": 41, "seaborn": 41, "flexoki": 41, "x": 42, "y": 42, "In": 42, "place": 42, "show": 42, "tick": 42, "axi": 42, "python": [43, 44], "propos": 43, "statist": 43, "electrochem": 43, "spectroscopi": 43, "design": 43, "research": 43, "practition": 43, "field": 43, "includ": 43, "limit": 43, "explor": 43, "electrocatalysi": 43, "batteri": 43, "investig": 43, "materi": 43, "degrad": 43, "still": 43, "under": 43, "develop": 43, "therefor": 43, "stabl": 43, "ani": 43, "bug": 43, "suggest": 43, "pleas": [43, 44], "file": 43, "issu": 43, "directli": 43, "submit": 43, "pull": 43, "request": 43, "would": 43, "greatli": 43, "appreci": 43, "contribut": 43, "commun": 43, "instal": 43, "usag": 43, "notat": 43, "open": 44, "termin": 44, "command": 44, "prompt": 44, "window": 44, "run": 44, "pip": 44, "u": 44, "depend": 44, "It": 44, "your": 44, "own": 44, "don": 44, "itself": 44, "also": 44, "decid": 44, "offici": 44, "via": 44, "juliaup": 44, "provid": 44, "line": 44, "interfac": 44, "multipl": 44, "side": 44, "straightforward": 44, "instruct": 44, "its": 44, "github": 44, "page": 44, "requir": 44, "9": 44, "higher": 44, "strict": 44, "due": 44, "mani": 44, "optim": 44, "introduc": 44, "significantli": 44, "reduc": 44, "startup": 44, "backend": 44, "pollut": 44, "global": 44, "instead": 44, "virtual": 44, "re": 44, "safe": 44, "without": 44, "worri": 44, "break": 44, "store": 44, "instanc": 44, "anaconda": 44, "myenv": 44, "anaconda3": 44, "env": 44, "julia_env": 44, "unix": 44, "system": 44, "userprofil": 44, "five": 45, "modul": 45, "read": 45, "write": 45, "best": 45, "helper": 45}, "objects": {"": [[45, 0, 0, "-", "autoeis"]], "autoeis": [[2, 0, 0, "-", "core"], [3, 0, 0, "-", "io"], [4, 0, 0, "-", "parser"], [5, 0, 0, "-", "utils"], [6, 0, 0, "-", "visualization"]], "autoeis.core": [[7, 1, 1, "", "filter_implausible_circuits"], [8, 1, 1, "", "generate_equivalent_circuits"], [9, 1, 1, "", "perform_bayesian_inference"], [10, 1, 1, "", "perform_full_analysis"], [11, 1, 1, "", "preprocess_impedance_data"]], "autoeis.io": [[12, 1, 1, "", "get_assets_path"], [13, 1, 1, "", "load_test_circuits"], [14, 1, 1, "", "load_test_dataset"], [15, 1, 1, "", "parse_ec_output"]], "autoeis.parser": [[16, 1, 1, "", "convert_to_impedance_format"], [17, 1, 1, "", "count_parameters"], [18, 1, 1, "", "find_ohmic_resistors"], [19, 1, 1, "", "get_component_labels"], [20, 1, 1, "", "get_component_types"], [21, 1, 1, "", "get_parameter_labels"], [22, 1, 1, "", "get_parameter_types"], [23, 1, 1, "", "group_parameters_by_component"], [24, 1, 1, "", "group_parameters_by_type"], [25, 1, 1, "", "parse_component"], [26, 1, 1, "", "parse_parameter"], [27, 1, 1, "", "validate_circuit"], [28, 1, 1, "", "validate_parameter"]], "autoeis.utils": [[29, 1, 1, "", "are_circuits_equivalent"], [30, 1, 1, "", "circuit_complexity"], [31, 1, 1, "", "fit_circuit_parameters"], [32, 1, 1, "", "generate_circuit_fn"], [33, 1, 1, "", "generate_circuit_fn_impedance_backend"], [34, 1, 1, "", "initialize_priors"], [35, 1, 1, "", "initialize_priors_from_posteriors"], [36, 1, 1, "", "validate_circuits_dataframe"]], "autoeis.visualization": [[37, 1, 1, "", "draw_circuit"], [38, 1, 1, "", "plot_impedance_combo"], [39, 1, 1, "", "plot_linKK_residuals"], [40, 1, 1, "", "plot_nyquist"], [41, 1, 1, "", "set_plot_style"], [42, 1, 1, "", "show_nticks"]]}, "objtypes": {"0": "py:module", "1": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"]}, "titleterms": {"basic": 0, "usag": 0, "circuit": 1, "notat": 1, "core": 2, "io": 3, "parser": 4, "util": 5, "visual": 6, "filter_implausible_circuit": 7, "generate_equivalent_circuit": 8, "perform_bayesian_infer": 9, "perform_full_analysi": 10, "preprocess_impedance_data": 11, "get_assets_path": 12, "load_test_circuit": 13, "load_test_dataset": 14, "parse_ec_output": 15, "convert_to_impedance_format": 16, "count_paramet": 17, "find_ohmic_resistor": 18, "get_component_label": 19, "get_component_typ": 20, "get_parameter_label": 21, "get_parameter_typ": 22, "group_parameters_by_compon": 23, "group_parameters_by_typ": 24, "parse_compon": 25, "parse_paramet": 26, "validate_circuit": 27, "validate_paramet": 28, "are_circuits_equival": 29, "circuit_complex": 30, "fit_circuit_paramet": 31, "generate_circuit_fn": 32, "generate_circuit_fn_impedance_backend": 33, "initialize_prior": 34, "initialize_priors_from_posterior": 35, "validate_circuits_datafram": 36, "draw_circuit": 37, "plot_impedance_combo": 38, "plot_linkk_residu": 39, "plot_nyquist": 40, "set_plot_styl": 41, "show_ntick": 42, "autoei": 43, "autom": 43, "ei": 43, "analysi": 43, "what": 43, "i": 43, "content": 43, "instal": 44, "how": 44, "julia": 44, "minimum": 44, "version": 44, "about": 44, "share": 44, "environ": 44, "api": 45, "refer": 45}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Basic usage": [[0, "basic-usage"]], "Circuit notation": [[1, "circuit-notation"]], "core": [[2, "module-autoeis.core"]], "io": [[3, "module-autoeis.io"]], "parser": [[4, "module-autoeis.parser"]], "utils": [[5, "module-autoeis.utils"]], "visualization": [[6, "module-autoeis.visualization"]], "filter_implausible_circuits": [[7, "filter-implausible-circuits"]], "generate_equivalent_circuits": [[8, "generate-equivalent-circuits"]], "perform_bayesian_inference": [[9, "perform-bayesian-inference"]], "perform_full_analysis": [[10, "perform-full-analysis"]], "preprocess_impedance_data": [[11, "preprocess-impedance-data"]], "get_assets_path": [[12, "get-assets-path"]], "load_test_circuits": [[13, "load-test-circuits"]], "load_test_dataset": [[14, "load-test-dataset"]], "parse_ec_output": [[15, "parse-ec-output"]], "convert_to_impedance_format": [[16, "convert-to-impedance-format"]], "count_parameters": [[17, "count-parameters"]], "find_ohmic_resistors": [[18, "find-ohmic-resistors"]], "get_component_labels": [[19, "get-component-labels"]], "get_component_types": [[20, "get-component-types"]], "get_parameter_labels": [[21, "get-parameter-labels"]], "get_parameter_types": [[22, "get-parameter-types"]], "group_parameters_by_component": [[23, "group-parameters-by-component"]], "group_parameters_by_type": [[24, "group-parameters-by-type"]], "parse_component": [[25, "parse-component"]], "parse_parameter": [[26, "parse-parameter"]], "validate_circuit": [[27, "validate-circuit"]], "validate_parameter": [[28, "validate-parameter"]], "are_circuits_equivalent": [[29, "are-circuits-equivalent"]], "circuit_complexity": [[30, "circuit-complexity"]], "fit_circuit_parameters": [[31, "fit-circuit-parameters"]], "generate_circuit_fn": [[32, "generate-circuit-fn"]], "generate_circuit_fn_impedance_backend": [[33, "generate-circuit-fn-impedance-backend"]], "initialize_priors": [[34, "initialize-priors"]], "initialize_priors_from_posteriors": [[35, "initialize-priors-from-posteriors"]], "validate_circuits_dataframe": [[36, "validate-circuits-dataframe"]], "draw_circuit": [[37, "draw-circuit"]], "plot_impedance_combo": [[38, "plot-impedance-combo"]], "plot_linKK_residuals": [[39, "plot-linkk-residuals"]], "plot_nyquist": [[40, "plot-nyquist"]], "set_plot_style": [[41, "set-plot-style"]], "show_nticks": [[42, "show-nticks"]], "AutoEIS: Automated EIS Analysis": [[43, "autoeis-automated-eis-analysis"]], "What is AutoEIS?": [[43, "what-is-autoeis"]], "Contents": [[43, "contents"]], "Installation": [[44, "installation"]], "How to install Julia": [[44, null]], "Minimum Julia version": [[44, null]], "About shared environments": [[44, null]], "API Reference": [[45, "api-reference"]]}, "indexentries": {"autoeis.core": [[2, "module-autoeis.core"]], "module": [[2, "module-autoeis.core"], [3, "module-autoeis.io"], [4, "module-autoeis.parser"], [5, "module-autoeis.utils"], [6, "module-autoeis.visualization"], [45, "module-autoeis"]], "autoeis.io": [[3, "module-autoeis.io"]], "autoeis.parser": [[4, "module-autoeis.parser"]], "autoeis.utils": [[5, "module-autoeis.utils"]], "autoeis.visualization": [[6, "module-autoeis.visualization"]], "filter_implausible_circuits() (in module autoeis.core)": [[7, "autoeis.core.filter_implausible_circuits"]], "generate_equivalent_circuits() (in module autoeis.core)": [[8, "autoeis.core.generate_equivalent_circuits"]], "perform_bayesian_inference() (in module autoeis.core)": [[9, "autoeis.core.perform_bayesian_inference"]], "perform_full_analysis() (in module autoeis.core)": [[10, "autoeis.core.perform_full_analysis"]], "preprocess_impedance_data() (in module autoeis.core)": [[11, "autoeis.core.preprocess_impedance_data"]], "get_assets_path() (in module autoeis.io)": [[12, "autoeis.io.get_assets_path"]], "load_test_circuits() (in module autoeis.io)": [[13, "autoeis.io.load_test_circuits"]], "load_test_dataset() (in module autoeis.io)": [[14, "autoeis.io.load_test_dataset"]], "parse_ec_output() (in module autoeis.io)": [[15, "autoeis.io.parse_ec_output"]], "convert_to_impedance_format() (in module autoeis.parser)": [[16, "autoeis.parser.convert_to_impedance_format"]], "count_parameters() (in module autoeis.parser)": [[17, "autoeis.parser.count_parameters"]], "find_ohmic_resistors() (in module autoeis.parser)": [[18, "autoeis.parser.find_ohmic_resistors"]], "get_component_labels() (in module autoeis.parser)": [[19, "autoeis.parser.get_component_labels"]], "get_component_types() (in module autoeis.parser)": [[20, "autoeis.parser.get_component_types"]], "get_parameter_labels() (in module autoeis.parser)": [[21, "autoeis.parser.get_parameter_labels"]], "get_parameter_types() (in module autoeis.parser)": [[22, "autoeis.parser.get_parameter_types"]], "group_parameters_by_component() (in module autoeis.parser)": [[23, "autoeis.parser.group_parameters_by_component"]], "group_parameters_by_type() (in module autoeis.parser)": [[24, "autoeis.parser.group_parameters_by_type"]], "parse_component() (in module autoeis.parser)": [[25, "autoeis.parser.parse_component"]], "parse_parameter() (in module autoeis.parser)": [[26, "autoeis.parser.parse_parameter"]], "validate_circuit() (in module autoeis.parser)": [[27, "autoeis.parser.validate_circuit"]], "validate_parameter() (in module autoeis.parser)": [[28, "autoeis.parser.validate_parameter"]], "are_circuits_equivalent() (in module autoeis.utils)": [[29, "autoeis.utils.are_circuits_equivalent"]], "circuit_complexity() (in module autoeis.utils)": [[30, "autoeis.utils.circuit_complexity"]], "fit_circuit_parameters() (in module autoeis.utils)": [[31, "autoeis.utils.fit_circuit_parameters"]], "generate_circuit_fn() (in module autoeis.utils)": [[32, "autoeis.utils.generate_circuit_fn"]], "generate_circuit_fn_impedance_backend() (in module autoeis.utils)": [[33, "autoeis.utils.generate_circuit_fn_impedance_backend"]], "initialize_priors() (in module autoeis.utils)": [[34, "autoeis.utils.initialize_priors"]], "initialize_priors_from_posteriors() (in module autoeis.utils)": [[35, "autoeis.utils.initialize_priors_from_posteriors"]], "validate_circuits_dataframe() (in module autoeis.utils)": [[36, "autoeis.utils.validate_circuits_dataframe"]], "draw_circuit() (in module autoeis.visualization)": [[37, "autoeis.visualization.draw_circuit"]], "plot_impedance_combo() (in module autoeis.visualization)": [[38, "autoeis.visualization.plot_impedance_combo"]], "plot_linkk_residuals() (in module autoeis.visualization)": [[39, "autoeis.visualization.plot_linKK_residuals"]], "plot_nyquist() (in module autoeis.visualization)": [[40, "autoeis.visualization.plot_nyquist"]], "set_plot_style() (in module autoeis.visualization)": [[41, "autoeis.visualization.set_plot_style"]], "show_nticks() (in module autoeis.visualization)": [[42, "autoeis.visualization.show_nticks"]], "autoeis": [[45, "module-autoeis"]]}})
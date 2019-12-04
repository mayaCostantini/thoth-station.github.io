Search.setIndex({docnames:["anneal","dependency_monkey","index","integration","performance","pipeline","predictor","provenance_checks","resolver","thoth.adviser","thoth.adviser.boots","thoth.adviser.predictors","thoth.adviser.sieves","thoth.adviser.steps","thoth.adviser.strides","thoth.adviser.wraps"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["anneal.rst","dependency_monkey.rst","index.rst","integration.rst","performance.rst","pipeline.rst","predictor.rst","provenance_checks.rst","resolver.rst","thoth.adviser.rst","thoth.adviser.boots.rst","thoth.adviser.predictors.rst","thoth.adviser.sieves.rst","thoth.adviser.steps.rst","thoth.adviser.strides.rst","thoth.adviser.wraps.rst"],objects:{"thoth.adviser":{Beam:[9,1,1,""],Boot:[9,1,1,""],Context:[9,1,1,""],DecisionType:[9,1,1,""],DependencyMonkey:[9,1,1,""],DependencyMonkeyReport:[9,1,1,""],Ecosystem:[9,1,1,""],PipelineBuilder:[9,1,1,""],PipelineConfig:[9,1,1,""],Predictor:[9,1,1,""],Product:[9,1,1,""],PythonRecommendationOutput:[9,1,1,""],RecommendationType:[9,1,1,""],Report:[9,1,1,""],Resolver:[9,1,1,""],Sieve:[9,1,1,""],State:[9,1,1,""],Step:[9,1,1,""],Stride:[9,1,1,""],Unit:[9,1,1,""],Wrap:[9,1,1,""],beam:[9,0,0,"-"],boot:[9,0,0,"-"],boots:[10,0,0,"-"],cli:[9,0,0,"-"],context:[9,0,0,"-"],dependency_monkey:[9,0,0,"-"],digests_fetcher:[9,0,0,"-"],dm_report:[9,0,0,"-"],enums:[9,0,0,"-"],exceptions:[9,0,0,"-"],pipeline_builder:[9,0,0,"-"],pipeline_config:[9,0,0,"-"],predictor:[9,0,0,"-"],predictors:[11,0,0,"-"],product:[9,0,0,"-"],report:[9,0,0,"-"],resolver:[9,0,0,"-"],run:[9,0,0,"-"],sieve:[9,0,0,"-"],sieves:[12,0,0,"-"],solver:[9,0,0,"-"],state:[9,0,0,"-"],step:[9,0,0,"-"],steps:[13,0,0,"-"],stride:[9,0,0,"-"],strides:[14,0,0,"-"],unit:[9,0,0,"-"],wrap:[9,0,0,"-"],wraps:[15,0,0,"-"]},"thoth.adviser.Beam":{add_state:[9,2,1,""],get:[9,2,1,""],get_top_idx:[9,2,1,""],iter_states:[9,2,1,""],iter_states_sorted:[9,2,1,""],new_iteration:[9,2,1,""],plot:[9,2,1,""],pop:[9,2,1,""],size:[9,2,1,""],top:[9,2,1,""],width:[9,3,1,""],wipe:[9,2,1,""]},"thoth.adviser.Boot":{run:[9,2,1,""]},"thoth.adviser.Context":{accepted_final_states_count:[9,3,1,""],count:[9,3,1,""],decision_type:[9,3,1,""],discarded_final_states_count:[9,3,1,""],get_package_version:[9,2,1,""],get_top_accepted_final_state:[9,2,1,""],graph:[9,3,1,""],is_adviser:[9,2,1,""],is_dependency_monkey:[9,2,1,""],iter_accepted_final_states:[9,2,1,""],iter_accepted_final_states_sorted:[9,2,1,""],iteration:[9,3,1,""],library_usage:[9,3,1,""],limit:[9,3,1,""],package_versions:[9,3,1,""],project:[9,3,1,""],recommendation_type:[9,3,1,""],register_accepted_final_state:[9,2,1,""],register_package_tuple:[9,2,1,""],register_package_version:[9,2,1,""],sources:[9,3,1,""],stack_info:[9,3,1,""]},"thoth.adviser.DecisionType":{ALL:[9,3,1,""],RANDOM:[9,3,1,""]},"thoth.adviser.DependencyMonkey":{beam:[9,2,1,""],context:[9,3,1,""],decision_type:[9,3,1,""],dry_run:[9,3,1,""],predictor:[9,2,1,""],resolve:[9,2,1,""],resolver:[9,3,1,""],stack_output:[9,3,1,""]},"thoth.adviser.DependencyMonkeyReport":{add_response:[9,2,1,""],skipped:[9,3,1,""],to_dict:[9,2,1,""]},"thoth.adviser.Ecosystem":{PYTHON:[9,3,1,""]},"thoth.adviser.PipelineBuilder":{from_dict:[9,2,1,""],get_adviser_pipeline_config:[9,2,1,""],get_dependency_monkey_pipeline_config:[9,2,1,""],load:[9,2,1,""]},"thoth.adviser.PipelineConfig":{boots:[9,3,1,""],call_post_run:[9,2,1,""],call_post_run_report:[9,2,1,""],call_pre_run:[9,2,1,""],iter_units:[9,2,1,""],sieves:[9,3,1,""],steps:[9,3,1,""],strides:[9,3,1,""],to_dict:[9,2,1,""],wraps:[9,3,1,""]},"thoth.adviser.Predictor":{plot:[9,2,1,""],post_run:[9,2,1,""],post_run_report:[9,2,1,""],pre_run:[9,2,1,""],run:[9,2,1,""]},"thoth.adviser.Product":{advised_runtime_environment:[9,3,1,""],from_final_state:[9,2,1,""],justification:[9,3,1,""],project:[9,3,1,""],score:[9,3,1,""],to_dict:[9,2,1,""]},"thoth.adviser.PythonRecommendationOutput":{PIPENV:[9,3,1,""],REQUIREMENTS:[9,3,1,""]},"thoth.adviser.RecommendationType":{LATEST:[9,3,1,""],STABLE:[9,3,1,""],TESTING:[9,3,1,""]},"thoth.adviser.Report":{add_product:[9,2,1,""],count:[9,3,1,""],iter_products:[9,2,1,""],iter_products_sorted:[9,2,1,""],pipeline:[9,3,1,""],product_count:[9,2,1,""],set_stack_info:[9,2,1,""],stack_info:[9,2,1,""],to_dict:[9,2,1,""]},"thoth.adviser.Resolver":{DEFAULT_BEAM_WIDTH:[9,3,1,""],DEFAULT_COUNT:[9,3,1,""],DEFAULT_LIMIT:[9,3,1,""],DEFAULT_LIMIT_LATEST_VERSIONS:[9,3,1,""],beam:[9,2,1,""],beam_width:[9,3,1,""],context:[9,2,1,""],count:[9,3,1,""],decision_type:[9,3,1,""],get_adviser_instance:[9,2,1,""],get_dependency_monkey_instance:[9,2,1,""],graph:[9,3,1,""],library_usage:[9,3,1,""],limit:[9,3,1,""],limit_latest_versions:[9,3,1,""],pipeline:[9,3,1,""],predictor:[9,3,1,""],project:[9,3,1,""],recommendation_type:[9,3,1,""],resolve:[9,2,1,""],resolve_products:[9,2,1,""],solver:[9,2,1,""]},"thoth.adviser.Sieve":{run:[9,2,1,""]},"thoth.adviser.State":{add_justification:[9,2,1,""],add_unresolved_dependency:[9,2,1,""],advised_runtime_environment:[9,3,1,""],clone:[9,2,1,""],is_final:[9,2,1,""],justification:[9,3,1,""],resolved_dependencies:[9,3,1,""],score:[9,3,1,""],to_dict:[9,2,1,""],unresolved_dependencies:[9,3,1,""]},"thoth.adviser.Step":{MULTI_PACKAGE_RESOLUTIONS:[9,3,1,""],run:[9,2,1,""]},"thoth.adviser.Stride":{run:[9,2,1,""]},"thoth.adviser.Unit":{CONFIGURATION_DEFAULT:[9,3,1,""],CONFIGURATION_SCHEMA:[9,3,1,""],assigned_context:[9,2,1,""],compute_expanded_configuration:[9,2,1,""],configuration:[9,2,1,""],context:[9,2,1,""],get_aicoe_configuration:[9,2,1,""],is_aicoe_release:[9,2,1,""],name:[9,2,1,""],post_run:[9,2,1,""],post_run_report:[9,2,1,""],pre_run:[9,2,1,""],should_include:[9,2,1,""],to_dict:[9,2,1,""],update_configuration:[9,2,1,""]},"thoth.adviser.Wrap":{run:[9,2,1,""]},"thoth.adviser.beam":{Beam:[9,1,1,""]},"thoth.adviser.beam.Beam":{add_state:[9,2,1,""],get:[9,2,1,""],get_top_idx:[9,2,1,""],iter_states:[9,2,1,""],iter_states_sorted:[9,2,1,""],new_iteration:[9,2,1,""],plot:[9,2,1,""],pop:[9,2,1,""],size:[9,2,1,""],top:[9,2,1,""],width:[9,3,1,""],wipe:[9,2,1,""]},"thoth.adviser.boot":{Boot:[9,1,1,""]},"thoth.adviser.boot.Boot":{run:[9,2,1,""]},"thoth.adviser.context":{Context:[9,1,1,""]},"thoth.adviser.context.Context":{accepted_final_states_count:[9,3,1,""],count:[9,3,1,""],decision_type:[9,3,1,""],discarded_final_states_count:[9,3,1,""],get_package_version:[9,2,1,""],get_top_accepted_final_state:[9,2,1,""],graph:[9,3,1,""],is_adviser:[9,2,1,""],is_dependency_monkey:[9,2,1,""],iter_accepted_final_states:[9,2,1,""],iter_accepted_final_states_sorted:[9,2,1,""],iteration:[9,3,1,""],library_usage:[9,3,1,""],limit:[9,3,1,""],package_versions:[9,3,1,""],project:[9,3,1,""],recommendation_type:[9,3,1,""],register_accepted_final_state:[9,2,1,""],register_package_tuple:[9,2,1,""],register_package_version:[9,2,1,""],sources:[9,3,1,""],stack_info:[9,3,1,""]},"thoth.adviser.dependency_monkey":{DependencyMonkey:[9,1,1,""]},"thoth.adviser.dependency_monkey.DependencyMonkey":{beam:[9,2,1,""],context:[9,3,1,""],decision_type:[9,3,1,""],dry_run:[9,3,1,""],predictor:[9,2,1,""],resolve:[9,2,1,""],resolver:[9,3,1,""],stack_output:[9,3,1,""]},"thoth.adviser.digests_fetcher":{GraphDigestsFetcher:[9,1,1,""]},"thoth.adviser.digests_fetcher.GraphDigestsFetcher":{fetch_digests:[9,2,1,""],graph:[9,3,1,""]},"thoth.adviser.dm_report":{DependencyMonkeyReport:[9,1,1,""]},"thoth.adviser.dm_report.DependencyMonkeyReport":{add_response:[9,2,1,""],skipped:[9,3,1,""],to_dict:[9,2,1,""]},"thoth.adviser.enums":{DecisionType:[9,1,1,""],Ecosystem:[9,1,1,""],PythonRecommendationOutput:[9,1,1,""],RecommendationType:[9,1,1,""]},"thoth.adviser.enums.DecisionType":{ALL:[9,3,1,""],RANDOM:[9,3,1,""]},"thoth.adviser.enums.Ecosystem":{PYTHON:[9,3,1,""]},"thoth.adviser.enums.PythonRecommendationOutput":{PIPENV:[9,3,1,""],REQUIREMENTS:[9,3,1,""]},"thoth.adviser.enums.RecommendationType":{LATEST:[9,3,1,""],STABLE:[9,3,1,""],TESTING:[9,3,1,""]},"thoth.adviser.exceptions":{AdviserException:[9,4,1,""],AdviserPipelineException:[9,4,1,""],BootError:[9,4,1,""],CannotProduceStack:[9,4,1,""],EagerStopPipeline:[9,4,1,""],InternalError:[9,4,1,""],NoHistoryKept:[9,4,1,""],NotAcceptable:[9,4,1,""],NotFound:[9,4,1,""],PipelineConfigurationError:[9,4,1,""],PipelineUnitError:[9,4,1,""],PipfileParseError:[9,4,1,""],SieveError:[9,4,1,""],StepError:[9,4,1,""],StrideError:[9,4,1,""],UnableLock:[9,4,1,""],UnknownPipelineUnitError:[9,4,1,""],UnresolvedDependencies:[9,4,1,""],UnsupportedConfiguration:[9,4,1,""],VersionIdentifierError:[9,4,1,""],WrapError:[9,4,1,""]},"thoth.adviser.exceptions.UnresolvedDependencies":{unresolved:[9,3,1,""]},"thoth.adviser.pipeline_builder":{PipelineBuilder:[9,1,1,""],PipelineBuilderContext:[9,1,1,""]},"thoth.adviser.pipeline_builder.PipelineBuilder":{from_dict:[9,2,1,""],get_adviser_pipeline_config:[9,2,1,""],get_dependency_monkey_pipeline_config:[9,2,1,""],load:[9,2,1,""]},"thoth.adviser.pipeline_builder.PipelineBuilderContext":{add_unit:[9,2,1,""],boots:[9,2,1,""],decision_type:[9,3,1,""],graph:[9,3,1,""],is_adviser_pipeline:[9,2,1,""],is_dependency_monkey_pipeline:[9,2,1,""],is_included:[9,2,1,""],library_usage:[9,3,1,""],project:[9,3,1,""],recommendation_type:[9,3,1,""],sieves:[9,2,1,""],steps:[9,2,1,""],strides:[9,2,1,""],wraps:[9,2,1,""]},"thoth.adviser.pipeline_config":{PipelineConfig:[9,1,1,""]},"thoth.adviser.pipeline_config.PipelineConfig":{boots:[9,3,1,""],call_post_run:[9,2,1,""],call_post_run_report:[9,2,1,""],call_pre_run:[9,2,1,""],iter_units:[9,2,1,""],sieves:[9,3,1,""],steps:[9,3,1,""],strides:[9,3,1,""],to_dict:[9,2,1,""],wraps:[9,3,1,""]},"thoth.adviser.predictor":{Predictor:[9,1,1,""]},"thoth.adviser.predictor.Predictor":{plot:[9,2,1,""],post_run:[9,2,1,""],post_run_report:[9,2,1,""],pre_run:[9,2,1,""],run:[9,2,1,""]},"thoth.adviser.predictors":{AdaptiveSimulatedAnnealing:[11,1,1,""],annealing:[11,0,0,"-"]},"thoth.adviser.predictors.AdaptiveSimulatedAnnealing":{keep_temperature_history:[11,3,1,""],plot:[11,2,1,""],pre_run:[11,2,1,""],run:[11,2,1,""]},"thoth.adviser.predictors.annealing":{AdaptiveSimulatedAnnealing:[11,1,1,""]},"thoth.adviser.predictors.annealing.AdaptiveSimulatedAnnealing":{keep_temperature_history:[11,3,1,""],plot:[11,2,1,""],pre_run:[11,2,1,""],run:[11,2,1,""]},"thoth.adviser.product":{Product:[9,1,1,""]},"thoth.adviser.product.Product":{advised_runtime_environment:[9,3,1,""],from_final_state:[9,2,1,""],justification:[9,3,1,""],project:[9,3,1,""],score:[9,3,1,""],to_dict:[9,2,1,""]},"thoth.adviser.report":{Report:[9,1,1,""]},"thoth.adviser.report.Report":{add_product:[9,2,1,""],count:[9,3,1,""],iter_products:[9,2,1,""],iter_products_sorted:[9,2,1,""],pipeline:[9,3,1,""],product_count:[9,2,1,""],set_stack_info:[9,2,1,""],stack_info:[9,2,1,""],to_dict:[9,2,1,""]},"thoth.adviser.resolver":{Resolver:[9,1,1,""]},"thoth.adviser.resolver.Resolver":{DEFAULT_BEAM_WIDTH:[9,3,1,""],DEFAULT_COUNT:[9,3,1,""],DEFAULT_LIMIT:[9,3,1,""],DEFAULT_LIMIT_LATEST_VERSIONS:[9,3,1,""],beam:[9,2,1,""],beam_width:[9,3,1,""],context:[9,2,1,""],count:[9,3,1,""],decision_type:[9,3,1,""],get_adviser_instance:[9,2,1,""],get_dependency_monkey_instance:[9,2,1,""],graph:[9,3,1,""],library_usage:[9,3,1,""],limit:[9,3,1,""],limit_latest_versions:[9,3,1,""],pipeline:[9,3,1,""],predictor:[9,3,1,""],project:[9,3,1,""],recommendation_type:[9,3,1,""],resolve:[9,2,1,""],resolve_products:[9,2,1,""],solver:[9,2,1,""]},"thoth.adviser.run":{subprocess_run:[9,5,1,""]},"thoth.adviser.sieve":{Sieve:[9,1,1,""]},"thoth.adviser.sieve.Sieve":{run:[9,2,1,""]},"thoth.adviser.sieves":{CutPreReleasesSieve:[12,1,1,""],PackageIndexSieve:[12,1,1,""],SolvedSieve:[12,1,1,""],index_enabled:[12,0,0,"-"],prereleases:[12,0,0,"-"],solved:[12,0,0,"-"]},"thoth.adviser.sieves.CutPreReleasesSieve":{run:[12,2,1,""],should_include:[12,2,1,""]},"thoth.adviser.sieves.PackageIndexSieve":{run:[12,2,1,""],should_include:[12,2,1,""]},"thoth.adviser.sieves.SolvedSieve":{CONFIGURATION_DEFAULT:[12,3,1,""],run:[12,2,1,""],should_include:[12,2,1,""]},"thoth.adviser.sieves.index_enabled":{PackageIndexSieve:[12,1,1,""]},"thoth.adviser.sieves.index_enabled.PackageIndexSieve":{run:[12,2,1,""],should_include:[12,2,1,""]},"thoth.adviser.sieves.prereleases":{CutPreReleasesSieve:[12,1,1,""]},"thoth.adviser.sieves.prereleases.CutPreReleasesSieve":{run:[12,2,1,""],should_include:[12,2,1,""]},"thoth.adviser.sieves.solved":{SolvedSieve:[12,1,1,""]},"thoth.adviser.sieves.solved.SolvedSieve":{CONFIGURATION_DEFAULT:[12,3,1,""],run:[12,2,1,""],should_include:[12,2,1,""]},"thoth.adviser.solver":{GraphReleasesFetcher:[9,1,1,""],PackageVersionDependencyParser:[9,1,1,""],PythonGraphSolver:[9,1,1,""],PythonPackageGraphSolver:[9,1,1,""]},"thoth.adviser.solver.GraphReleasesFetcher":{fetch_releases:[9,2,1,""],graph:[9,3,1,""],runtime_environment:[9,3,1,""]},"thoth.adviser.solver.PackageVersionDependencyParser":{parse:[9,2,1,""]},"thoth.adviser.solver.PythonGraphSolver":{dependency_parser:[9,3,1,""],releases_fetcher:[9,3,1,""]},"thoth.adviser.solver.PythonPackageGraphSolver":{graph:[9,3,1,""],runtime_environment:[9,3,1,""],solve:[9,2,1,""],solver:[9,2,1,""]},"thoth.adviser.state":{State:[9,1,1,""]},"thoth.adviser.state.State":{add_justification:[9,2,1,""],add_unresolved_dependency:[9,2,1,""],advised_runtime_environment:[9,3,1,""],clone:[9,2,1,""],is_final:[9,2,1,""],justification:[9,3,1,""],resolved_dependencies:[9,3,1,""],score:[9,3,1,""],to_dict:[9,2,1,""],unresolved_dependencies:[9,3,1,""]},"thoth.adviser.step":{Step:[9,1,1,""]},"thoth.adviser.step.Step":{MULTI_PACKAGE_RESOLUTIONS:[9,3,1,""],run:[9,2,1,""]},"thoth.adviser.steps":{CvePenalizationStep:[13,1,1,""],cve:[13,0,0,"-"]},"thoth.adviser.steps.CvePenalizationStep":{CONFIGURATION_DEFAULT:[13,3,1,""],run:[13,2,1,""],should_include:[13,2,1,""]},"thoth.adviser.steps.cve":{CvePenalizationStep:[13,1,1,""]},"thoth.adviser.steps.cve.CvePenalizationStep":{CONFIGURATION_DEFAULT:[13,3,1,""],run:[13,2,1,""],should_include:[13,2,1,""]},"thoth.adviser.stride":{Stride:[9,1,1,""]},"thoth.adviser.stride.Stride":{run:[9,2,1,""]},"thoth.adviser.strides":{RandomDecisionStride:[14,1,1,""],random_decision:[14,0,0,"-"]},"thoth.adviser.strides.RandomDecisionStride":{run:[14,2,1,""],should_include:[14,2,1,""]},"thoth.adviser.strides.random_decision":{RandomDecisionStride:[14,1,1,""]},"thoth.adviser.strides.random_decision.RandomDecisionStride":{run:[14,2,1,""],should_include:[14,2,1,""]},"thoth.adviser.unit":{Unit:[9,1,1,""]},"thoth.adviser.unit.Unit":{CONFIGURATION_DEFAULT:[9,3,1,""],CONFIGURATION_SCHEMA:[9,3,1,""],assigned_context:[9,2,1,""],compute_expanded_configuration:[9,2,1,""],configuration:[9,2,1,""],context:[9,2,1,""],get_aicoe_configuration:[9,2,1,""],is_aicoe_release:[9,2,1,""],name:[9,2,1,""],post_run:[9,2,1,""],post_run_report:[9,2,1,""],pre_run:[9,2,1,""],should_include:[9,2,1,""],to_dict:[9,2,1,""],update_configuration:[9,2,1,""]},"thoth.adviser.wrap":{Wrap:[9,1,1,""]},"thoth.adviser.wrap.Wrap":{run:[9,2,1,""]},thoth:{adviser:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"abstract":[0,5,9],"case":[0,2,4,5,9],"class":[4,5,9,11,12,13,14],"default":[5,9],"enum":[2,5],"final":[0,5,9],"float":[4,5,9,11,13],"function":[0,2,5,9,11],"import":[0,4,5],"int":[4,9,11],"new":[0,4,5,9],"null":4,"public":7,"return":[5,8,9],"switch":4,"true":[5,9,12],"try":[2,5],And:3,For:2,NOT:7,One:8,TLS:7,That:7,The:[0,1,2,3,4,5,7,9],There:[0,1,2,7,9],These:[0,1,2],Used:9,__name__:5,_extendedenum:9,_logger:5,abandon:0,about:[0,1,5,9],abov:[0,2,4,5],accept:[0,1,4,5,9,14],accepted_final_states_count:9,accepted_st:9,accepted_states_count:9,access:5,accomplish:0,accur:2,accuraci:1,across:1,action:9,actual:[1,2,4,7,8,9,11],adapt:[2,4,5,9,11],adaptivesimulatedann:[5,11],add:[3,4,5,9],add_justif:9,add_product:9,add_respons:9,add_stat:9,add_unit:9,add_unresolved_depend:9,added:[0,5],adding:[4,5],addit:[1,4,5],adjust:[0,4,5],administr:[4,5],advic:1,advis:[0,1,3,4,5],advised_runtime_environ:9,adviserexcept:9,adviserpipelineexcept:9,after:[1,4,5,9],again:2,against:[2,7],aggreg:[1,2,5,9],aico:[4,7,9],aim:1,algorithm:[0,1,5,8,9],all:[0,1,2,4,5,8,9],all_performance_model:4,alloc:[1,9],allow:[2,5,12],along:1,alreadi:[0,4,5,8,9],also:[0,2,4,5,7,8],alwai:5,amun:[1,2,4],analysi:4,analyz:5,ani:[0,1,4,5,7,8,9,12,13,14],anneal:[2,5,9,13],anneal_product:5,anoth:[0,5,7],anymor:7,api:[1,2,3,4,5,7],appli:[1,5,8],applic:[2,5,7,8],approach:0,apt:1,arg:9,argument:2,ari:2,arrai:5,artifact:5,asa:[9,11],ask:[3,5,9],aspect:1,assembl:2,assign:[1,9],assigned_context:9,atom:5,attr:5,autom:1,automat:[1,2,4,5],autonom:5,avail:[0,1,2,3,4,5,7,9],backend:5,base:[0,1,2,3,4,5,7,8,9,11,12,13,14],beam:[0,2,11],beam_histori:9,beam_search:9,beam_width:9,becaus:5,becom:[0,5],been:[4,9],befor:[3,5,9,11],behav:5,behavior:0,behaviour:5,behind:8,being:[5,13],bellow:[4,5,7],below:0,benefit:[4,5],besid:[0,1,5,8],best:[2,9],better:0,block:5,bool:[5,9,11,12],boot:[0,2],booterror:9,boots_includ:9,both:[3,7],bound:9,branch:4,brief:0,brows:2,browser:1,bucket:0,bug:9,build:[1,4,5,7,8,12],builder:[5,9],builder_context:[5,9,12,13,14],built:[2,4,7,9],cach:9,cached_record:12,call:[0,1,2,5,9],call_post_run:9,call_post_run_report:9,call_pre_run:9,callabl:9,can:[0,1,2,3,4,5,7,8,9],candid:2,cannot:[2,9],cannotproducestack:9,capabl:[1,5],captur:[4,5],card:5,carri:[4,5,9],casu:7,caus:[0,5],ceph:1,certain:1,chang:[2,3,4,5,7],characterist:[1,4,5],check:[5,9],circa:0,circumfer:5,clash:0,classmethod:[5,9,12,13,14],cli:[1,2],client:5,climb:5,clone:[0,9],closer:5,cls:5,cluster:[3,5,9],cnn:5,code:[1,2,4,9],coin:[5,14],com:2,combin:[0,1,2,5],come:[0,5,7],comma:[2,7],command:2,commit:4,common:[5,9],comparis:7,comparison:1,compat:1,complex:5,compliant:8,compon:4,comput:[0,1,2,4,5,7,8,9],compute_expanded_configur:9,condition:5,config:[3,9],configur:[1,3,7,8,9,12,13,14],configuration_default:[5,9,12,13],configuration_dict:9,configuration_schema:9,conform:4,connect:[2,7],consid:[1,5,9],consist:5,constant:9,constraint:9,construct:5,consum:[1,3],contain:1,content:2,context:[1,2,4,5,11],continu:5,control:2,conv2d:5,convert:[3,9],convolut:5,copi:9,core:[1,2],correspond:2,could:1,count:9,counter:9,cpu:[1,4,5,9],crash:5,creat:[0,1,2,5,9],create_schema:4,creation:12,current:[1,5,7,9],cut:[5,12],cutprereleasessiev:[5,12],cve:[5,9,14],cve_pen:[5,13],cve_record:5,cvepenalizationstep:[5,13],danger:7,data:[0,1,2,9],databas:[0,1,2,4,9],debug:5,dec:2,decid:[5,14],decis:[5,9],decision_typ:[5,9],decisiontyp:[5,9],decreas:0,dedic:1,def:5,default_beam_width:9,default_count:9,default_limit:9,default_limit_latest_vers:9,defin:[4,9],definit:9,demonstr:0,depend:[0,3,4,5,7,8,9,12],dependeci:5,dependency_graph:1,dependency_monkei:2,dependency_pars:9,dependencymonkei:9,dependencymonkeyreport:9,dependencypars:9,dependneci:2,deploi:[2,7,8],deploy:9,deriv:[1,4,5],describ:[0,2,4,5],design:[0,2,4,5],desir:4,desktop:5,detail:3,detect:5,determin:9,dev:4,develop:[2,5,9],devic:4,dict:[4,5,9,12,13,14],dict_:9,dictionari:[4,5,9],did:[0,7],differ:[0,1,5],digest:9,digests_fetch:2,digestsfetcherbas:9,direct:[0,2,5,8,12],directli:[1,2,4,7],directori:3,disabl:[2,5,12],discard:[0,5],discarded_final_states_count:9,discoveri:5,discret:5,discuss:1,distribut:[1,2],dm_report:2,dnf:1,doabl:2,doc:2,document:[2,4,7],doe:[1,5,7,8,12],don:5,done:[1,4,5,7,8,9],down:[1,8],download:[7,8],drop:0,dry_run:9,dtype:4,due:[5,9],dure:[0,4,5,8,9,13],dynam:[5,8,9],each:[0,2,5],eagerstoppipelin:[5,9],easiest:3,easili:2,ecosystem:[0,1,8,9],edg:0,eigher:[5,7],either:[0,9],elaps:4,element:9,empti:[0,5],enabl:[9,12],encapsul:5,encod:9,encount:8,end:[5,7,9],endpoint:[1,4],engin:[1,2,5,9],entri:[8,9],enum34:8,environ:[1,2,3,4,7,8],error:[1,5,9,12],etc:5,evalu:[1,5,8],even:[0,1],event:5,everi:[0,5],exact:4,exactli:7,exampl:[0,2,3,4,5,9],exc:5,except:[0,2,5,8],execut:[1,2,4,5],exhaust:9,exist:5,expand:[0,5],expans:[1,2,4,9],expect:7,experi:2,explicitli:[5,7,12],explictli:7,explor:0,expos:[1,7],extern:5,extra:9,fact:[5,8],fail:[7,9],fallback:7,fals:9,far:[0,9],faster:1,fed:2,fedora:[1,2],feed:1,fetch:9,fetch_digest:9,fetch_releas:9,fetcher:9,fiction:1,field:9,figur:[0,9,11],file:[3,4,5,9],filter:[0,5,9,12,14],find:[0,2,3,4,5],finish:9,first:[0,1,5,7],flask:0,flip:[5,14],float32:4,follow:[0,2,3,4,5,7],form:[0,1,4,5],format:4,found:[0,3,5,7,9],framework:4,freshli:9,from:[0,1,2,3,4,5,7,8,9],from_dict:9,from_final_st:9,full:2,fulli:[0,1,5,8,9],gather:[1,4,5],gener:[0,1,2,5,8,9,12],get:[2,3,4,5,9],get_adviser_inst:9,get_adviser_pipeline_config:9,get_aicoe_configur:9,get_dependency_monkey_inst:9,get_dependency_monkey_pipeline_config:9,get_package_vers:9,get_python_cve_records_al:5,get_top_accepted_final_st:9,get_top_idx:9,getlogg:5,getrandbit:5,git:[2,3],github:2,given:[0,1,2,4,5,7,9],goal:[1,2],good:5,gpu:[3,5],grace:9,graph:[0,1,2,4,5,8,9],graphdatabas:[4,9],graphdigestsfetch:9,graphreleasesfetch:9,guarante:[1,2,7],guid:[2,3],guiden:0,hanc:5,hand:7,handl:[0,9],happen:7,hardwar:[1,2,3,7],has:[2,3,4,7,9],has_error:5,has_python_solver_error:5,hash:5,hat:7,have:[0,4,5,7],heap:9,heapq:9,heapq_count:9,help:[2,8],henc:[5,8],here:2,hierarchi:9,high:[0,1],higher:5,highest:[0,9],hill:5,hint:7,histori:[9,11],hold:[2,4],how:[0,2,3,4,7],howev:[1,2,7],http:[2,9],identifi:9,idx:9,illustr:[0,1],imag:[1,2,3],impact:5,implement:[0,4,5,7,9,10,11,12,13,14,15],includ:[4,5,8,9,12],incom:5,incompat:5,incorpor:4,index:[0,1,2,4,5,7,9,12],index_en:9,indic:[1,2,5],info:[0,1,2,5,9],inform:[1,4,5,7,9],infrastractur:2,inherit:5,initi:[0,9,11],inject:4,input:[1,2,5,7],insecur:7,insert:[4,9],insid:[3,4],inspect:[1,5],instal:[0,1,3,4,5,7,8,9,12],instanc:[2,7,9],instanti:[5,9],instead:7,instruct:3,integr:2,interact:[1,2,8],interfac:[2,9],intern:9,internalerror:9,interpret:5,introduc:5,introduct:5,invalid:9,invectio:5,ipython:5,is_advis:9,is_adviser_pipelin:[5,9],is_aicoe_releas:9,is_dependency_monkei:9,is_dependency_monkey_pipelin:[5,9],is_fin:9,is_includ:[5,9],is_prereleas:5,issu:[2,4,5,12],iter:[0,5,9],iter_accepted_final_st:9,iter_accepted_final_states_sort:9,iter_product:9,iter_products_sort:9,iter_st:9,iter_states_sort:9,iter_unit:9,itertool:0,its:[0,1,2,5,8,9],job:[1,4],json:[1,4,7],jupyt:5,just:[0,5,7],justif:[5,9],kafka:7,keep:[0,5,9],keep_temperature_histori:11,kei:4,kept:[0,8,9],kernel:[1,4],kill:9,killer:9,know:8,knowledg:[1,2,4,5,8],known:[5,9],languag:[5,8],largest:9,last:[0,5],lastli:5,latest:[2,5,9],lazili:[0,5,9],learn:2,least:[5,7],legaci:5,len:5,let:[1,3,4,5,7],level:[2,9],librari:[1,2,3,4,9],library_usag:[5,9],like:[4,5],limit:[0,9],limit_latest_vers:9,line:[1,2,9],link:4,list:[0,1,2,3,4,5,7,9,11,13],live:9,load:[0,9],local:5,lock:[3,7,9],locked_vers:5,log:[5,9],logic:5,longer:7,look:[0,4,11],lowercas:4,made:[1,5],mai:5,main:[1,2,3,5,9],maintain:4,make:[0,1,2,3,5],manag:[1,3,4,7],manipul:9,manual:5,map:5,marker:[8,9],master:4,match:[0,4,7],math:1,matplotlib:[9,11],matrix:4,matrix_s:4,mean:7,meant:9,meanwhil:4,mechan:1,memori:[0,1,9],mention:1,merg:4,messag:9,metadata:[4,7],method:[5,9],might:[1,3,5,7,8],million:1,mimic:5,mirror:7,model_properti:4,models_bas:4,modul:2,monkei:[0,4,5,9,12],more:[0,1,2,4,5,7],most:[0,2,4,5],mostli:5,much:1,multi_package_resolut:9,multipl:[1,3,4,5,9],mutli_package_resolut:9,name:[4,5,9,12,13,14],namespac:1,narrow:8,nativ:[1,2,5],need:[4,5,8,9],neg:5,neighbour:0,nest:4,network:5,neural:5,new_iter:9,newli:4,next:9,nice:5,node:1,nohistorykept:9,non:5,none:[5,9,11,12,13,14],noop:9,nor:2,normal:8,notaccept:[5,9],note:[1,5,7],notebook:[2,5],notfound:9,notfounderror:5,noth:[9,11,12,13,14],now:2,number:[0,4,9],object:[1,9],observ:[0,1,4,5,9],obtain:[0,4],occur:[0,5],off:[1,5,9,12],offlin:[0,2,9],often:[2,8],old:5,onc:[0,1,4,5,9],one:[0,1,4,5,7,8,9],ones:[0,4,5],onli:[0,1,2,5,9,13,14],onto:[1,4],oom:9,open:4,openapi:1,openshift:[1,2,5,7],oper:[0,1,2,5,9],operating_system:5,optim:[4,5,7,9],option:[1,3,4,5,7,9,11,12,13,14],order:[5,9],org:9,os_nam:5,os_vers:5,other:[0,1,4,5,7],otherwis:9,out:[0,1,5,12,14],output:[1,4,5,7,9],output_fil:[9,11],outsid:8,over:[0,2,5,7,9],overal:4,overall_scor:4,overhead:9,overrid:5,own:7,owner:4,packag:[0,1,4,5,8],package_nam:[5,9],package_tupl:9,package_vers:[5,9,12,13],packageindexsiev:12,packagevers:[5,9,12,13],packageversiondependencypars:9,page:2,paramet:[0,2,4,5],parent:5,pars:[1,9],part:[0,1,4,5,9],partial:[5,9],particip:9,pass:[1,2,9],path:3,penal:[5,13],pep:[2,7],per:[2,7],perfom:7,perform:[0,1,2,5,7,9],performanceindicatorbas:4,phase:4,pick:0,piec:5,pimatmul:4,pimodel:4,pin:1,pip3:[2,3],pip:[1,2,5,8],pipelin:[1,2,4,9,12],pipeline_build:[2,5],pipeline_config:2,pipelinebuild:9,pipelinebuildercontext:[5,9,12,13,14],pipelineconfig:9,pipelineconfigurationerror:9,pipelineuniterror:9,pipenv:[1,2,3,4,5,7,8,9],pipfil:[1,3,5,7,9],pipfileparseerror:9,place:[1,3],playbook:2,pleas:4,plot:[9,11],point:[1,2,5,7,9],pool:1,pop:9,popul:4,possibl:[0,1,2,5],post:9,post_run:9,post_run_report:9,postgr:9,postgresql:2,pprint:0,pre:[0,1,4,5,8,9,12],pre_run:[9,11],preced:9,precomput:9,predict:2,predictor:2,prematur:[5,9],prepar:5,prereleas:[5,9],prereleases_allow:5,present:[1,3,4,5,7,9,13],previou:4,primari:2,primit:9,principl:0,print:4,print_func:9,prior:5,priorit:5,probabl:[0,8],probe:9,procedur:1,process:[4,9],prod:4,produc:[0,1,3,5,9],product:[0,2,5,7],product_count:9,program:[5,8],programat:5,progress:5,project:[1,2,5,9,12],promis:0,propag:4,proper:4,properti:[4,5,9],provid:[1,2,4,5,9],pull:4,pure:9,purpos:[0,2,5],pypi:7,python2:5,python3:[4,5],python:[0,1,4,5,7,9,12,13],python_vers:[5,8],pythongraphsolv:9,pythonpackagegraphsolv:9,pythonpath:[2,4],pythonrecommendationoutput:9,pytorch:4,qualiti:1,queri:[0,4],queue:9,rais:[5,9],random:[0,5,9],random_decis:9,randomdecisionstrid:[5,14],randomli:[5,14],rang:[0,8],rate:[0,4,9],rather:7,raw:[5,9],rdf:4,readi:4,real:1,realli:8,reason:[2,5,8],recommend:[1,3,4,7,8,9],recommendation_typ:9,recommendationtyp:9,reconfigur:5,red:7,refer:9,regist:[5,9],register_accepted_final_st:9,register_package_tupl:9,register_package_vers:9,rel:5,relat:4,releas:[0,4,5,9,12],releases_fetch:9,releasesfetch:9,relev:[1,4],remov:[5,7,9,12,13,14],rep:4,repo:[1,2,4],report:[1,2,4,5,8],repositori:[2,3,4],repres:[2,9],represent:[0,9],request:[0,1,2,4,5,9],requir:[0,1,4,5,9],requisit:5,reserv:1,resolut:[0,1,2,5,7,8,9],resolv:[0,1,2,5,11,14],resolve_product:9,resolved_depend:9,resourc:[0,1,9],respect:[0,2,4,5,7,9],respons:9,rest:1,restrict:[2,9],result:[1,4,5,8],result_dict:9,retriev:[0,5,9],reus:[1,2],revers:9,review:4,right:5,root:3,routin:9,rpm:[1,2],run:[0,1,3,5,7,8,11,12,13,14],runtim:[1,2,4,5],runtime_environ:[5,9],runtimeenviron:9,s2i:[5,7],sai:7,same:[0,2,4,5,7],sampl:[2,5],satisfact:8,save:9,scalabl:0,scale:0,scan:[5,7],schedul:2,schema:[4,9],score:[0,2,4,5,9,11],score_factor:5,script:1,search:[0,2,9],second:5,section:[0,4,5],secur:5,see:[0,1,2,4,5,7],seed:2,seen:0,self:5,semant:5,semantic_vers:5,semver:9,sent:1,separ:[2,7],serial:[4,9],seriou:5,servic:[1,2,3,4,5],set:[2,9],set_stack_info:9,setup:[2,5,9],share:5,should:[1,4,5,7,9],should_includ:[5,9,12,13,14],show:0,side:5,siev:[0,2],sieveerror:9,sieves_includ:9,signal:[5,9],similar:0,simpl:[2,7],simpli:2,simplifi:0,simul:[2,5,9,11,13],singl:[0,4,5],size:[0,4,9],skip:[5,9],slot:5,small:5,snip:5,softwar:[0,1,2,3,4,8,9,11],sole:2,solut:[0,9],solv:[5,9],solvedsiev:[5,12],solver:[2,8],some:[0,2,4],somehow:5,sort:[0,9],sourc:[0,1,4,9,11,12,13,14],space:[0,4,5,9],span:1,special:5,specif:[0,1,2,3,4,5,7,9],specifi:[4,7,8,9],spent:4,spot:[2,5],ssl:7,stabl:[5,9],stack:[0,1,2,3,4,5,7,8,9,11,13,14],stack_info:9,stack_output:9,stage:4,standard:[1,2],start:5,state:[1,2,4,7,13,14],station:[2,4],statu:1,stderr:4,stdout:4,step:[0,1,2,4,12],steperror:9,steps_includ:9,still:[5,9],stochast:0,stop:5,storag:[2,4,5,9],store:[2,8,9],str:[4,5,9,11,12,13,14],stream:1,stride:[0,2,4],strideerror:9,strides_includ:9,string:9,structur:[0,1,7,8],sub:8,subcommand:1,submit:[1,5],submodul:[2,4],subpackag:2,subprocess:9,subprocess_run:9,subsequ:[0,1,2,4,5],suffix:2,suggest:7,suit:5,suitabl:[5,9],summari:3,suppli:[1,4,5,9],support:[1,3,7],sure:3,swallow:9,symbol:5,sync:4,system:[1,5],tail:[5,14],take:[0,8],taken:2,target:[1,3,5],temperatur:[0,9,11],temperature_histori:11,tensorflow:[0,3,4,5,7],tensorflow_buildinfo:4,termin:[0,5],terminolog:2,test:[1,4,5,9],thamo:[2,5],than:[0,5],thei:[0,4,5,9],them:[0,3,4,5,7,9,12],therei:9,thi:[0,1,2,4,5,7,8,9],thing:5,those:1,thoth:[0,1,4,5],thoth_adviser_warehous:7,thoth_whitelisted_sourc:2,thousand:1,three:[0,5],through:2,thu:0,time:[0,1,2,4,5,7,8,9,12],to_dict:[5,9],to_tupl:5,todo:3,togeth:[2,5],too:5,tool:[1,2,5],top:[0,5,9,11],top_idx:9,top_stat:9,toppop:9,total:0,track:9,traffic:7,transit:2,travers:0,treat:7,trend:0,tri:7,trigger:[1,4],trust:2,tupl:[5,9,11,13],turn:[4,9],two:[0,1,3,5,7],txt:3,type:[0,4,9],type_check:5,unabl:9,unablelock:9,undefin:5,under:[4,5],unexpectedli:9,union:9,uniqu:4,unit:[2,10,15],unit_class:9,unknown:9,unknownpipelineuniterror:9,unless:5,unresolv:[0,9],unresolved_depend:9,unresolveddepend:9,unsupport:9,unsupportedconfigur:9,until:5,untouch:9,untrust:2,upcom:4,updat:4,update_configur:9,url:[1,2,5,9],usag:9,use:[2,3,4,5,7,8],used:[0,1,2,3,5,7,8,9,11,12,13,14],useful:[2,9],user:[1,2,4,5,7,9],uses:[0,5],using:[0,1,2,4,5,9],util:[1,9],valid:[1,2,5],valu:[4,5],variabl:[2,7],vector:5,veri:[0,1,5],verif:[1,7],verifi:[1,2,4,8],version:[0,1,2,5,8,9,12],versionidentifiererror:9,via:2,view:5,virtual:3,vulner:5,wai:[0,2,3,5],wait:4,want:[1,4,5,9],warehous:7,warn:5,web:1,weight:0,well:[2,5,7,8],were:[0,1,2,5,9],what:[1,2,5],wheel:4,when:[0,2,5,7,8,9],where:[1,3,4,5,9],whether:[5,9],which:[0,1,2,3,4,5,7,8,9,12],whitelist:[2,7],whole:[0,5,9],why:2,wide:5,width:[0,9],wiki:9,wikipedia:[0,9],wipe:9,with_devel:9,within:5,without:[0,1,5,7,8],without_error:[5,12],word:5,work:[5,9],world:[1,8],would:[0,4,5,8,9],wrap:[0,2],wraperror:9,wrapper:9,wraps_includ:9,write:3,written:4,wrong:9,yaml:3,yet:[3,5],yield:5,you:[2,3,4,5,7,8],your:[2,4,7],yum:1},titles:["Adaptive simulated annealing","Dependency Monkey Design Document","Thoth Adviser","Integrating with Thoth","Performance indicators","State expansion pipeline","&lt;no title&gt;","Provenance Checks","Thoth\u2019s offline resolver","thoth.adviser package","thoth.adviser.boots package","thoth.adviser.predictors package","thoth.adviser.sieves package","thoth.adviser.steps package","thoth.adviser.strides package","thoth.adviser.wraps package"],titleterms:{"case":1,"enum":9,"static":5,Use:1,Using:0,about:2,adapt:0,advis:[2,9,10,11,12,13,14,15],afterword:5,analysi:5,anneal:[0,11],applic:3,architectur:1,artifact:7,beam:9,boot:[5,9,10],build:3,check:[2,7],cli:[3,9],code:5,command:3,configur:[2,5],content:[9,10,11,12,13,14,15],context:9,creat:4,creation:5,crossroad:2,cve:13,depend:[1,2],dependency_monkei:9,deploy:[2,4],design:1,differ:7,digests_fetch:9,dm_report:9,document:1,environ:5,error:7,exampl:[1,7],except:9,expans:[0,5],foreword:5,github:3,hardwar:5,hash:7,implement:2,index_en:12,indic:4,info:7,inform:2,instal:2,integr:3,interfac:3,invalid:7,issu:7,jupyt:3,kebechet:3,librari:5,line:3,local:2,miss:7,model:4,modul:[9,10,11,12,13,14,15],monkei:[1,2],note:8,notebook:3,offlin:8,openshift:3,overview:1,packag:[2,7,9,10,11,12,13,14,15],perform:4,pipelin:[0,5],pipeline_build:9,pipeline_config:9,possibl:7,pre:3,predictor:[9,11],prereleas:12,process:3,product:9,project:3,proven:[2,7],python:[3,8],random_decis:14,recommend:[2,5],regist:4,report:[7,9],requir:3,resolv:[8,9],run:[2,4,9],s2i:3,script:4,siev:[5,9,12],simul:0,softwar:5,solv:12,solver:9,sourc:[2,5,7],state:[0,5,9],step:[5,9,13],stride:[5,9,14],submodul:[9,11,12,13,14],subpackag:9,summari:4,thamo:3,thoth:[2,3,8,9,10,11,12,13,14,15],type:5,unit:[5,9],usag:5,use:1,warn:7,wrap:[5,9,15],write:4,your:3}})
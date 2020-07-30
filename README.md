
https://xiaomi.f.mioffice.cn/sheets/shtk4Zzs4HbvRPAU7WsfYDot5sJ

```sql
create schema if not exists `mount-config-admin` collate latin1_swedish_ci;

create table if not exists application_information
(
	id bigint auto_increment comment '主键'
		primary key,
	group_id bigint not null comment '组id',
	app_id bigint not null comment '应用id',
	app_name varchar(500) not null comment '应用名称',
	create_time bigint not null comment '创建时间',
	update_item bigint not null comment '修改时间',
	create_user varchar(20) not null comment '创建人',
	update_user varchar(20) not null comment '更新人'
)
comment '配置应用信息';

create table if not exists authority
(
	id bigint not null comment '主键'
		primary key,
	authority_key varchar(500) not null comment '权限key',
	group_arr text not null comment '配置组权限list',
	app_arr text not null comment '应用权限list',
	config_arr text not null comment '配置权限list',
	create_time bigint not null comment '创建时间',
	update_time bigint not null comment '更新时间',
	create_user bigint not null comment '创建人',
	update_user bigint not null comment '更新人'
)
comment '权限管理';

create table if not exists config_app_data
(
	id bigint auto_increment comment '主键id'
		primary key,
	group_id varchar(500) not null comment '隶属的组',
	app_id bigint not null comment '隶属的模板',
	app_data_id bigint not null,
	level_key varchar(500) not null comment '映射的层级',
	value text null comment '值',
	value_type varchar(500) not null comment '值的类型，（枚举，bool，字符串，数字）',
	create_user varchar(500) not null comment '创建人',
	update_user varchar(500) not null comment '更新用户',
	create_time bigint not null comment '创建时间',
	update_time bigint not null comment '更新时间'
)
comment '子集树状模板数值表';

create table if not exists config_information
(
	id bigint auto_increment comment '主键id'
		primary key,
	group_id bigint not null comment '组id',
	app_id bigint not null comment '应用id',
	config_id bigint not null comment '配置id',
	config_name varchar(500) null comment '配置名',
	config_template_id bigint not null comment '关联的模板id',
	config_data text not null comment '差异性配置信息',
	create_time bigint null comment '创建时间',
	update_time bigint not null comment '更新时间',
	create_user varchar(20) not null comment '创建人',
	update_user varchar(20) not null comment '更新人'
)
comment '配置信息表';

create table if not exists config_item_optional_data
(
	id bigint not null comment '主键id'
		primary key,
	group_id varchar(500) not null comment '组id',
	data_id varchar(500) not null comment '数据集合id',
	data_name varchar(500) not null comment '数据集合名称',
	data_value text not null comment '数据集合值',
	data_type varchar(500) not null comment '配置类型',
	create_user varchar(500) not null comment '创建用户',
	update_user varchar(500) not null comment '更新人',
	create_time bigint not null comment '创建时间',
	update_time bigint not null comment '更新时间'
)
comment '配置项可选信息表';

create table if not exists config_subset_template
(
	id bigint auto_increment comment '主键id'
		primary key,
	app_id bigint not null,
	group_id bigint null,
	subset_id varchar(500) not null comment '子集树状模板id',
	subset_name varchar(500) not null comment '子集树状模板名称',
	create_user varchar(500) not null comment '创建人',
	update_user varchar(500) not null comment '修改人',
	create_time bigint not null comment '创建时间',
	update_time bigint not null comment '更新时间'
)
comment '子集树状模块模板信息表';

create table if not exists config_subset_template_structure
(
	id bigint auto_increment comment '主键id'
		primary key,
	subset_template_id bigint null comment '本结构模板隶属那个子结构',
	level_key varchar(500) not null comment '当前目录层级结构，使用''.''进行分割',
	create_user varchar(500) not null comment '创建者',
	update_user varchar(500) not null comment '修改者',
	create_time bigint not null comment '创建时间',
	update_time bigint not null comment '更新时间'
)
comment '子集树状模块模板结构表';

create table if not exists config_template
(
	id bigint auto_increment comment '主键id'
		primary key,
	group_id bigint not null,
	app_id bigint not null,
	template_id bigint not null,
	template_name varchar(200) not null,
	subset_template_id bigint not null,
	template_value text null,
	create_user varchar(500) not null,
	update_user varchar(500) not null,
	create_time bigint not null comment '创建时间',
	update_time bigint not null comment '更新时间'
)
comment '配置模板';

create table if not exists group_information
(
	id bigint auto_increment
		primary key,
	group_id bigint not null comment '组id',
	group_name bigint not null comment '组名称',
	create_time bigint not null comment '创建时间',
	update_time bigint not null comment '更新时间',
	create_user bigint not null comment '创建人',
	update_user bigint not null comment '更新人'
)
comment '配置组信息表';

create table if not exists `release`
(
	id bigint not null comment '发布记录'
		primary key,
	create_time bigint not null comment '创建时间',
	update_time bigint not null comment '更新时间'
)
comment '发布记录';
```
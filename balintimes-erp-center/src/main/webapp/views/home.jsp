<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <%@include file="/views/include/resources_header.jsp" %>
    <title>百灵时代OA系统 -- 2015</title>
</head>
<body class="skin-blue sidebar-mini">
<div inform class="inform-fixed informMessage"></div>
<div class="wrapper">

    <!-- Main Header -->
    <header class="main-header">

        <!-- Logo -->
        <a href="http://www.balintimes.com" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>OA</b></span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg">Balintimes<b>OA</b></span>
        </a>

        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- Messages: style can be found in dropdown.less-->
                    <li class="dropdown messages-menu">
                        <!-- Menu toggle button -->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-envelope-o"></i>
                            <span class="label label-success">4</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="header">You have 4 messages</li>
                            <li>
                                <!-- inner menu: contains the messages -->
                                <ul class="menu">
                                    <li><!-- start message -->
                                        <a href="#">
                                            <div class="pull-left">
                                                <!-- User Image -->
                                                <img ng-src="{{rootpath + WebUser.avatarUrl}}" class="img-circle"
                                                     alt="User Image"/>
                                            </div>
                                            <!-- Message title and timestamp -->
                                            <h4>
                                                Support Team
                                                <small><i class="fa fa-clock-o"></i> 5 mins</small>
                                            </h4>
                                            <!-- The message -->
                                            <p>Why not buy a new awesome theme?</p>
                                        </a>
                                    </li>
                                    <!-- end message -->
                                </ul>
                                <!-- /.menu -->
                            </li>
                            <li class="footer"><a href="#">See All Messages</a></li>
                        </ul>
                    </li>
                    <!-- /.messages-menu -->

                    <!-- Notifications Menu -->
                    <li class="dropdown notifications-menu">
                        <!-- Menu toggle button -->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-bell-o"></i>
                            <span class="label label-warning">10</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="header">You have 10 notifications</li>
                            <li>
                                <!-- Inner Menu: contains the notifications -->
                                <ul class="menu">
                                    <li><!-- start notification -->
                                        <a href="#">
                                            <i class="fa fa-users text-aqua"></i> 5 new members joined today
                                        </a>
                                    </li>
                                    <!-- end notification -->
                                </ul>
                            </li>
                            <li class="footer"><a href="#">View all</a></li>
                        </ul>
                    </li>
                    <!-- Tasks Menu -->
                    <li class="dropdown tasks-menu">
                        <!-- Menu Toggle Button -->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-flag-o"></i>
                            <span class="label label-danger">9</span>
                        </a>
                        <ul class="dropdown-menu">
                            <li class="header">You have 9 tasks</li>
                            <li>
                                <!-- Inner menu: contains the tasks -->
                                <ul class="menu">
                                    <li><!-- Task item -->
                                        <a href="#">
                                            <!-- Task title and progress text -->
                                            <h3>
                                                Design some buttons
                                                <small class="pull-right">20%</small>
                                            </h3>
                                            <!-- The progress bar -->
                                            <div class="progress xs">
                                                <!-- Change the css width attribute to simulate progress -->
                                                <div class="progress-bar progress-bar-aqua" style="width: 20%"
                                                     role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                                     aria-valuemax="100">
                                                    <span class="sr-only">20% Complete</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <!-- end task item -->
                                </ul>
                            </li>
                            <li class="footer">
                                <a href="#">View all tasks</a>
                            </li>
                        </ul>
                    </li>
                    <!-- User Account Menu -->
                    <li class="dropdown user user-menu">
                        <!-- Menu Toggle Button -->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <!-- The user image in the navbar-->
                            <%--<img src="resources/image/avatars/DefaultAvatar.jpg" class="user-image" alt="User Image"/>--%>
                            <img ng-src="{{rootpath + WebUser.avatarUrl}}" class="user-image" alt="User Image"/>
                            <!-- hidden-xs hides the username on small devices so only the image appears. -->
                            <span class="hidden-xs" ng-bind="WebUser.employeeName"> </span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- The user image in the menu -->
                            <li class="user-header">
                                <img ng-src="{{rootpath + WebUser.avatarUrl}}" class="img-circle"
                                     alt="User Image"/>

                                <p style="font-size: 14px;font-weight: bold;">
                                    {{WebUser.employeeName}} - {{WebUser.username}}
                                </p>

                                <p>
                                    <small>最后近登录:{{WebUser.lastLogin}}</small>
                                </p>
                            </li>
                            <li class="user-body">
                                <div  class="col-md-10" ng-repeat="post in WebUser.postList">
                                    {{post.organizationname}} -- {{post.postname}}
                                </div>
                            </li>
                            <!-- Menu Body -->
                            <%--<li class="user-body">--%>
                            <%--<div class="col-xs-4 text-center">--%>
                            <%--<a href="#">Followers</a>--%>
                            <%--</div>--%>
                            <%--<div class="col-xs-4 text-center">--%>
                            <%--<a href="#">Sales</a>--%>
                            <%--</div>--%>
                            <%--<div class="col-xs-4 text-center">--%>
                            <%--<a href="#">Friends</a>--%>
                            <%--</div>--%>
                            <%--</li>--%>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a href="#" ui-sref="profile" class="btn btn-default btn-flat"><i
                                            class="fa fa-wrench"></i> 个人设置</a>
                                </div>
                                <div class="pull-right"><a href="#" class="btn btn-default btn-flat"><i
                                        class="fa fa-lock"></i> 锁定</a>
                                    <a href="{{rootpath}}/logout" class="btn btn-default btn-flat"><i
                                            class="fa fa-power-off"></i> 退出</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <!-- Control Sidebar Toggle Button -->
                    <%--                    <li>
                                            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                                        </li>--%>
                </ul>
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">

            <!-- Sidebar user panel (optional) -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img ng-src="{{rootpath + WebUser.avatarUrl}}" class="img-circle" alt="User Image"/>
                </div>
                <div class="pull-left info">
                    <p><a ui-sref="profile" href="#"><span ng-bind="WebUser.employeeName"></span></a></p>
                    <!-- Status -->
                    <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
                    <a href="#"><i class="fa fa-lock text-warning"></i> 锁定</a>
                    <a href="{{rootpath}}/logout"><i class="fa fa-power-off text-danger"></i> 退出</a>
                </div>
            </div>

            <!-- search form (Optional) -->
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Search..."/>
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
                </div>
            </form>
            <!-- /.search form -->

            <!-- Sidebar Menu -->
            <ul class="sidebar-menu">
                <li><a href="#" ui-sref="index"><i class="fa fa-home text-bold"></i> <span>主页</span></a></li>


                <%--<li class="treeview" ng-repeat="module in modules" litype="module">--%>
                <%--<a href="#"><i class="fa {{module.iconclass}}"></i> <span>{{module.name}}</span> <i--%>
                <%--class=" fa fa-angle-left pull-right"></i></a>--%>
                <%--<ul class="treeview-menu">--%>
                <%--<li ng-repeat="menu in module.children">--%>
                <%--<a href="#" ui-sref="{{menu.state}}">&nbsp;&nbsp;&nbsp;&nbsp;<i--%>
                <%--class="fa {{menu.iconclass}}"></i>{{menu.name}} </a></li>--%>
                <%--</ul>--%>

                <%--</li>--%>

                <user-menu user-menus="MenuTree"></user-menu>

                <%--                <!-- Optionally, you can add icons to the links -->
                                <li class="active"><a href="#"><i class="icon-link"></i>
                                    <span>Link</span>
                                </a></li>
                                <li><a href="#"><i class="fa fa-link"></i>
                                    <span>Another Link</span>
                                </a></li>
                                <li class="treeview">
                                    <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span> <i
                                            class="fa fa-angle-left pull-right"></i></a>
                                    <ul class="treeview-menu">
                                        <li><a href="#">Link in level 2</a></li>
                                        <li><a href="#">Link in level 2</a></li>
                                    </ul>
                                </li>--%>
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->

    <div class=" content-wrapper">
        <div block-ui="main">
            <!-- Main content -->
            <section class="content" ui-view>


            </section>
        </div>
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
        <!-- To the right -->
        <div class="pull-right hidden-xs">
        </div>
        <!-- Default to the left -->
        <strong>Copyright &copy; 2015 <a href="http://www.balintimes.com">Balintimes</a>.</strong> All rights reserved.
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
        <!-- Create the tabs -->
        <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
            <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
            <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
            <!-- Home tab content -->
            <div class="tab-pane active" id="control-sidebar-home-tab">
                <h3 class="control-sidebar-heading">Recent Activity</h3>
                <ul class="control-sidebar-menu">
                    <li>
                        <a href="javascript::;">
                            <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                            <div class="menu-info">
                                <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                                <p>Will be 23 on April 24th</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <!-- /.control-sidebar-menu -->

                <h3 class="control-sidebar-heading">Tasks Progress</h3>
                <ul class="control-sidebar-menu">
                    <li>
                        <a href="javascript::;">
                            <h4 class="control-sidebar-subheading">
                                Custom Template Design
                                <span class="label label-danger pull-right">70%</span>
                            </h4>

                            <div class="progress progress-xxs">
                                <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                            </div>
                        </a>
                    </li>
                </ul>
                <!-- /.control-sidebar-menu -->

            </div>
            <!-- /.tab-pane -->
            <!-- Stats tab content -->
            <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
            <!-- /.tab-pane -->
            <!-- Settings tab content -->
            <div class="tab-pane" id="control-sidebar-settings-tab">
                <form method="post">
                    <h3 class="control-sidebar-heading">General Settings</h3>

                    <div class="form-group">
                        <label class="control-sidebar-subheading">
                            Report panel usage
                            <input type="checkbox" class="pull-right" checked/>
                        </label>

                        <p>
                            Some information about this general settings option
                        </p>
                    </div>
                    <!-- /.form-group -->
                </form>
            </div>
            <!-- /.tab-pane -->
        </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
</div>
<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<!-- jQuery 2.1.4 -->
<%--
<script src="${ctx}/resources/js/jquery.min.js"></script>
<!-- Bootstrap 3.3.2 JS -->
<script src="${ctx}/resources/js/bootstrap.min.js" type="text/javascript"></script>
<!-- AdminLTE App -->
<script src="${ctx}/resources/js/appadmin.js" type="text/javascript"></script>
--%>

<!-- Optionally, you can add Slimscroll and FastClick plugins.
      Both of these plugins are recommended to enhance the
      user experience. Slimscroll is required when using the
      fixed layout. -->
</body>
</html>
mod.web_layout.BackendLayouts {
    bl1 {
        title = Content
        icon = EXT:typo3_base_ext/Resources/Public/Images/BackendLayouts/default.gif
        config {
            backend_layout {
                colCount = 1
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Content
                                colPos = 0
                            }
                        }
                    }
                }
            }
        }
    }
    bl2 {
        title = Head with Content left and Sidebar right
        icon = EXT:typo3_base_ext/Resources/Public/Images/BackendLayouts/default.gif
        config {
            backend_layout {
                rowCount = 2
                colCount = 4
                rows {
                    1 {
                        columns {
                            1 {
                                name = Head
                                colPos = 2
                                colspan = 4
                            }
                        }
                    }
                    2 {
                        columns {
                            1 {
                                name = Content
                                colPos = 0
                                colspan = 3
                            }
                            2 {
                                name = Sidebar
                                colPos = 1
                                colspan = 1
                            }
                        }
                    }
                }
            }
        }
    }
    bl3 {
        title = Head with Sidebar left and Content right
        icon = EXT:typo3_base_ext/Resources/Public/Images/BackendLayouts/default.gif
        config {
            backend_layout {
                rowCount = 2
                colCount = 4
                rows {
                    1 {
                        columns {
                            1 {
                                name = Head
                                colPos = 2
                                colspan = 4
                            }
                        }
                    }
                    2 {
                        columns {
                            1 {
                                name = Sidebar
                                colPos = 1
                                colspan = 1
                            }
                            2 {
                                name = Content
                                colPos = 0
                                colspan = 3
                            }
                        }
                    }
                }
            }
        }
    }
    bl4 {
        title = Content left and Sidebar right
        icon = EXT:typo3_base_ext/Resources/Public/Images/BackendLayouts/default.gif
        config {
            backend_layout {
                rowCount = 1
                colCount = 4
                rows {
                    1 {
                        columns {
                            1 {
                                name = Content
                                colPos = 0
                                colspan = 3
                            }
                            2 {
                                name = Sidebar
                                colPos = 1
                                colspan = 1
                            }
                        }
                    }
                }
            }
        }
    }
    bl5 {
        title = Sidebar left and Content right
        icon = EXT:typo3_base_ext/Resources/Public/Images/BackendLayouts/default.gif
        config {
            backend_layout {
                rowCount = 1
                colCount = 4
                rows {
                    1 {
                        columns {
                            1 {
                                name = Sidebar
                                colPos = 1
                                colspan = 1
                            }
                            2 {
                                name = Content
                                colPos = 0
                                colspan = 3
                            }
                        }
                    }
                }
            }
        }
    }
    bl6 {
        title = Head with Content
        icon = EXT:typo3_base_ext/Resources/Public/Images/BackendLayouts/default.gif
        config {
            backend_layout {
                colCount = 1
                rowCount = 2
                rows {
                    1 {
                        columns {
                            1 {
                                name = Head
                                colPos = 2
                            }
                        }
                    }
                    2 {
                        columns {
                            1 {
                                name = Content
                                colPos = 0
                            }
                        }
                    }
                }
            }
        }
    }
}

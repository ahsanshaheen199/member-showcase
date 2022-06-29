<?php
/**
 * Block Patterns
 *
 * @package Member_Showcase
 */


if ( ! function_exists( 'member_showcase_register_block_patterns' ) ) {
	/**
	 * Add block patterns.
	 */
	function member_showcase_register_block_patterns( ) {

		// Block pattern category
		register_block_pattern_category( 'team_member' , array( 'label' => __( 'Team Member', 'msb' ) ) );

		// Four Column Block Pattern ( Image Top )
		register_block_pattern( 'ahsan03/four-column-member-pattern', array(
			'title'         => __( 'Four Column', 'msb' ),
			'description'   => __( 'Four Column Member, Image Top', 'msb' ),
			'categories' => array( 'team_member' ),
			'content'       => '<!-- wp:group -->
								<div class="wp-block-group"><!-- wp:columns -->
								<div class="wp-block-columns"><!-- wp:column -->
								<div class="wp-block-column"><!-- wp:ahsan03/member-showcase -->
								<div class="wp-block-ahsan03-member-showcase member-item text-center image-top" style="padding-top:false;padding-bottom:false;padding-left:false;padding-right:false;margin-top:false;margin-bottom:false;margin-left:false;margin-right:false;border-width:false;border-style:false;border-color:false;border-radius:10px"><div class="member-details"><h4 style="color:#0c2461;font-size:22px;font-weight:700;font-style:normal;line-height:34px;margin-top:0;margin-right:0;margin-bottom:5px;margin-left:0">Adam Smith</h4><h6 style="color:#335d7d;font-size:16px;font-weight:600;font-style:normal;line-height:26px;margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0">CEO at automattic</h6><ul><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-facebook-alt"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-twitter"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-linkedin"></i></a></li></ul></div></div>
								<!-- /wp:ahsan03/member-showcase --></div>
								<!-- /wp:column -->
								
								<!-- wp:column -->
								<div class="wp-block-column"><!-- wp:ahsan03/member-showcase -->
								<div class="wp-block-ahsan03-member-showcase member-item text-center image-top" style="padding-top:false;padding-bottom:false;padding-left:false;padding-right:false;margin-top:false;margin-bottom:false;margin-left:false;margin-right:false;border-width:false;border-style:false;border-color:false;border-radius:10px"><div class="member-details"><h4 style="color:#0c2461;font-size:22px;font-weight:700;font-style:normal;line-height:34px;margin-top:0;margin-right:0;margin-bottom:5px;margin-left:0">Adam Smith</h4><h6 style="color:#335d7d;font-size:16px;font-weight:600;font-style:normal;line-height:26px;margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0">CEO at automattic</h6><ul><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-facebook-alt"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-twitter"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-linkedin"></i></a></li></ul></div></div>
								<!-- /wp:ahsan03/member-showcase --></div>
								<!-- /wp:column -->
								
								<!-- wp:column -->
								<div class="wp-block-column"><!-- wp:ahsan03/member-showcase -->
								<div class="wp-block-ahsan03-member-showcase member-item text-center image-top" style="padding-top:false;padding-bottom:false;padding-left:false;padding-right:false;margin-top:false;margin-bottom:false;margin-left:false;margin-right:false;border-width:false;border-style:false;border-color:false;border-radius:10px"><div class="member-details"><h4 style="color:#0c2461;font-size:22px;font-weight:700;font-style:normal;line-height:34px;margin-top:0;margin-right:0;margin-bottom:5px;margin-left:0">Adam Smith</h4><h6 style="color:#335d7d;font-size:16px;font-weight:600;font-style:normal;line-height:26px;margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0">CEO at automattic</h6><ul><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-facebook-alt"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-twitter"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-linkedin"></i></a></li></ul></div></div>
								<!-- /wp:ahsan03/member-showcase --></div>
								<!-- /wp:column -->
								
								<!-- wp:column -->
								<div class="wp-block-column"><!-- wp:ahsan03/member-showcase -->
								<div class="wp-block-ahsan03-member-showcase member-item text-center image-top" style="padding-top:false;padding-bottom:false;padding-left:false;padding-right:false;margin-top:false;margin-bottom:false;margin-left:false;margin-right:false;border-width:false;border-style:false;border-color:false;border-radius:10px"><div class="member-details"><h4 style="color:#0c2461;font-size:22px;font-weight:700;font-style:normal;line-height:34px;margin-top:0;margin-right:0;margin-bottom:5px;margin-left:0">Adam Smith</h4><h6 style="color:#335d7d;font-size:16px;font-weight:600;font-style:normal;line-height:26px;margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0">CEO at automattic</h6><ul><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-facebook-alt"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-twitter"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-linkedin"></i></a></li></ul></div></div>
								<!-- /wp:ahsan03/member-showcase --></div>
								<!-- /wp:column --></div>
								<!-- /wp:columns --></div>
								<!-- /wp:group -->'
		) );

		// Two Column Block Pattern ( Image Left )
		register_block_pattern( 'ahsan03/two-column-member-pattern', array(
			'title'         => __( 'Two Column', 'msb' ),
			'description'   => __( 'Two Column Member, Image Left', 'msb' ),
			'categories' => array( 'team_member' ),
			'content'       => '<!-- wp:group -->
								<div class="wp-block-group"><!-- wp:columns -->
								<div class="wp-block-columns"><!-- wp:column -->
								<div class="wp-block-column"><!-- wp:ahsan03/member-showcase {"memberImagePosition":"left","designation":"Course Teacher","hideDescription":false,"description":"Working as JavaScript teacher about ten years"} -->
								<div class="wp-block-ahsan03-member-showcase member-item text-center image-left" style="padding-top:false;padding-bottom:false;padding-left:false;padding-right:false;margin-top:false;margin-bottom:false;margin-left:false;margin-right:false;border-width:false;border-style:false;border-color:false;border-radius:10px"><div class="member-details"><h4 style="color:#0c2461;font-size:22px;font-weight:700;font-style:normal;line-height:34px;margin-top:0;margin-right:0;margin-bottom:5px;margin-left:0">Adam Smith</h4><h6 style="color:#335d7d;font-size:16px;font-weight:600;font-style:normal;line-height:26px;margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0">Course Teacher</h6><p style="color:#3c6382;font-size:15px;font-weight:400;font-style:normal;line-height:28px;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0">Working as JavaScript teacher about ten years</p><ul><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-facebook-alt"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-twitter"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-linkedin"></i></a></li></ul></div></div>
								<!-- /wp:ahsan03/member-showcase --></div>
								<!-- /wp:column -->
								
								<!-- wp:column -->
								<div class="wp-block-column"><!-- wp:ahsan03/member-showcase {"memberImagePosition":"left","designation":"Course Teacher","hideDescription":false,"description":"Working as JavaScript teacher about ten years"} -->
								<div class="wp-block-ahsan03-member-showcase member-item text-center image-left" style="padding-top:false;padding-bottom:false;padding-left:false;padding-right:false;margin-top:false;margin-bottom:false;margin-left:false;margin-right:false;border-width:false;border-style:false;border-color:false;border-radius:10px"><div class="member-details"><h4 style="color:#0c2461;font-size:22px;font-weight:700;font-style:normal;line-height:34px;margin-top:0;margin-right:0;margin-bottom:5px;margin-left:0">Adam Smith</h4><h6 style="color:#335d7d;font-size:16px;font-weight:600;font-style:normal;line-height:26px;margin-top:0;margin-right:0;margin-bottom:10px;margin-left:0">Course Teacher</h6><p style="color:#3c6382;font-size:15px;font-weight:400;font-style:normal;line-height:28px;margin-top:0;margin-right:0;margin-bottom:0;margin-left:0">Working as JavaScript teacher about ten years</p><ul><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-facebook-alt"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-twitter"></i></a></li><li><a style="color:#3742fa;--msb-social-icons-hover-color:#fff;--msb-social-icons-hover-bg-color:#3742fa;border-width:1px;border-style:solid;border-color:#3742fa" href="#"><i class="dashicons dashicons-linkedin"></i></a></li></ul></div></div>
								<!-- /wp:ahsan03/member-showcase --></div>
								<!-- /wp:column --></div>
								<!-- /wp:columns --></div>
								<!-- /wp:group -->'
		) );
	}
}

add_action( 'init', 'member_showcase_register_block_patterns' );
